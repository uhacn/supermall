<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabIndex="tabIndex"
      ref="tabControls"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="thisscroll"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperLoad.once="swiperLoad" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabIndex="tabIndex"
        ref="tabControl"
      />

      <goods-list :goods="showGoods" /> 
    </scroll>

    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import { imgListenerMixin } from "common/mixin"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins:[imgListenerMixin],
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    // 使内容回到原来位置
    this.$refs.thisscroll.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.thisscroll.scroll.refresh();
  },
  deactivated() {
    // 记录离开时的位置
    this.saveY = this.$refs.thisscroll.scroll.y;

    // 取消对图片的监听
    this.$bus.$off('goodsImageLoad', this.imgListener)
  },
  created() {
    // 1.请求轮播图和推荐模块数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  }, 
  // mounted() {
  //   // 3.监听商品图片是否加载完成
  //   // 防抖动
  //   const refresh = debounce(this.$refs.thisscroll.refresh, 10);
  //   // 事件总线
  //   this.$bus.$on("goodsImageLoad", () => {
  //     refresh();
  //     console.log(11);
  //   });
  //   // this.$bus.$on("goodsImageLoad", () => {
  //   //   this.$refs.thisscroll.scroll.refresh();
  //   //   console.log(111);
  //   // });
  // },
  methods: {
    // 点击导航栏切换模块
    tabIndex(index) {
      const title = ["pop", "new", "sell"];
      this.currentType = title[index];
      // 使两个tab索引号一致
      this.$refs.tabControls.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    // 点击返回顶部
    backClick() {
      this.$refs.thisscroll.scroll.scrollTo(0, 0, 500); // (x, y ,time)
    },
    // 监听滚动位置
    contentScroll(position) {
      // 1.隐藏或显示回调顶部按钮
      this.isShow = position.y < -1000;

      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = position.y < -this.tabTop;
      // console.log(this.isTabFixed);
      // console.log(position.y);
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 监听轮播图加载
    swiperLoad() {
      this.tabTop = this.$refs.tabControl.$el.offsetTop;
    },
    /**
     * 事件监听相关的方法
     */

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 加载商品
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99; */
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content {
  height: calc(100%);
  overflow: hidden;
} */
</style>