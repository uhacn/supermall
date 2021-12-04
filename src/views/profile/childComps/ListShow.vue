<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="list-item">
      <span class="icon">
        <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
      </span>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListShow",
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .list-item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.icon svg {
  width: 18px;
  height: 18px;
}

.list-item .icon {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: -7px;
}

.list-item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>