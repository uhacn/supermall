<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
      </div>
    <div v-else>
      <slot name="item-icon"></slot>
      </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f8922b",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    // 改变当前item样式
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    // 切换路由
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 11;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: #ff5777;
} */
</style>