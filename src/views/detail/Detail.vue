<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      :current-index="currentIndex"
      ref="nav"
    />
    <scroll class="content" ref="thisscroll" @scroll="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        class="goods-info"
      />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <detail-recommend :recommend-info="recommendList" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" class="bottom-bar" />
    <back-top @click.native="backClick" v-show="backTopShow" />
    <toast :message="message" :is-show="isShow" />
  </div>
</template>
 
<script>
import DetailNavBar from "./childCompn/DetailNavBar";
import DetailSwiper from "./childCompn/DetailSwiper";
import DetailBaseInfo from "./childCompn/DetailBaseInfo";
import DetailShopInfo from "./childCompn/DetailShopInfo";
import DetailGoodsInfo from "./childCompn/DetailGoodsInfo";
import DetailParamInfo from "./childCompn/DetailParamInfo";
import DetailCommentInfo from "./childCompn/DetailCommentInfo";
import DetailRecommend from "./childCompn/DetailRecommend";
import DetailBottomBar from "./childCompn/DetailBottomBar";


import Scroll from "components/common/scroll/Scroll";
import Toast from "components/common/toast/Toast";
import { imgListenerMixin, backTopMixin } from "common/mixin";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo, 
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
    Toast,
  },
  mixins: [imgListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0,
      message: "",
      isShow: false,
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6 .保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
    });
  },
  deactivated() {
    // 取消对图片的监听
    this.$bus.$off("goodsImageLoad", this.imgListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      // 图片加载完进行刷新
      this.$refs.thisscroll.refresh();

      // 保存各模块距离顶部距离
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      // 点击标题滚动到对应内容
      this.$refs.thisscroll.scroll.scrollTo(0, -this.themeTops[index], 300);
    },
    scroll(position) {
      // 监听滚动内容变化标题
      /**
       * 判断的方案:
       *  方案一:
       *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
       *    优点: 不需要引入其他的内容, 通过逻辑解决
       *    缺点: 判断条件过长, 并且不容易理解
       *  方案二:
       *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
       *    优点: 简洁明了, 便于理解
       *    缺点: 需要引入一个较大的int数字
       * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
       * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
       */
      const positionY = -position.y;
      for (let i = 0; i < this.themeTops.length - 1; i++) {
        if (
          positionY >= this.themeTops[i] &&
          positionY < this.themeTops[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 回到顶部的按钮的显示与隐藏
      this.backTopShow = position.y < -1000;
    },
    addToCart() {
      // 1.获取购物车需要的展示信息
      const goods = {};
      goods.iid = this.iid;
      goods.imgURL = this.topImages[0];
      goods.title = this.goods.title;
      goods.desc = this.goods.desc;
      goods.newPrice = this.goods.realPrice;
      // 2.将商品添加到购物车里
      // this.$store.dispatch('addCart', goods).then(res => {
      //   console.log(res)
      // })
      this.addCart(goods).then((res) => {
        // console.log(res);
        // this.isShow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = "";
        // }, 1000);

        this.$toast.show(res, 1500);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  height: calc(100% - 44px - 58px);
}

.goods-info {
  position: relative;
}

.bottom-bar {
  position: absolute;
  bottom: 0;
}
</style>
