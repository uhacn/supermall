<template>
  <swiper>
    <swiper-item v-if="banner[0]">
      <a :href="banner[0].link">
        <img src="~assets/img/home/banner0.jpg" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
    <swiper-item v-if="banner[1]">
      <a :href="banner[1].link">
        <img :src="banner[1].image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
    <swiper-item v-if="banner[2]">
      <a :href="banner[2].link">
        <img :src="banner[2].image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
    <swiper-item v-if="banner[3]">
      <a :href="banner[3].link">
        <img :src="banner[3].image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      this.$emit("swiperLoad");
    },
  },
};
</script>

<style scoped>
</style>
