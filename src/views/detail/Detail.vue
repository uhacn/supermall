<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from "./childCompn/DetailNavBar.vue";
import DetailSwiper from "./childCompn/DetailSwiper.vue";
import DetailBaseInfo from "./childCompn/DetailBaseInfo";
import DetailShopInfo from "./childCompn/DetailShopInfo";

import { getDetail, Goods , Shop} from "network/detail";


export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return{
      iid: null,
      topImages: null,
      goods: {},
      shop: {}
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods( res.result.itemInfo,  res.result.columns,  res.result.shopInfo.services
      );

       // 3.创建店铺信息的对象
        this.shop = new Shop(res.result.shopInfo)
    });
  },
};
</script>

<style>
</style>