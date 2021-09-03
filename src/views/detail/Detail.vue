<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="thisscroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        class="goods-info"
      />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <detail-recommend :recommend-info="recommendList" />
    </scroll>
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

import Scroll from "components/common/scroll/Scroll";
import { imgListenerMixin } from "common/mixin"

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

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
    Scroll,
  },
  mixins:[imgListenerMixin],
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
    this.$bus.$off('goodsImageLoad', this.imgListener)
  },
  methods: {
    imageLoad() {
      this.$refs.thisscroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}

.goods-info {
  position: relative;
}
</style>
