<template>
  <div>
    <grid-view v-if="subcategories.list" :cols="3" :line-space="30" :v-margin="20">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" />
          <div class="item-title">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridview/GridView";

export default {
  name: "TabContentCategory",
  components: {
    GridView,
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return[]
      },
    },
  },
};
</script>

<style scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-title {
  margin-top: 15px;
}
</style>