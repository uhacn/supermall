<template>
  <div class="recommend">
    <div class="recommend-item" v-if="recommend[0]">
      <a :href="recommend[0].link">
        <img src="~assets/img/home/recom0.png" alt="" />
        <div>{{ recommend[0].title }}</div>
      </a>
    </div>
    <div class="recommend-item" v-if="recommend[1]">
      <a :href="recommend[1].link">
        <img src="~assets/img/home/recom1.png" alt="" />
        <div>{{ recommend[1].title }}</div>
      </a>
    </div>
    <div class="recommend-item" v-if="recommend[2]">
      <a :href="recommend[2].link">
        <img src="~assets/img/home/recom2.png" alt="" />
        <div>{{ recommend[2].title }}</div>
      </a>
    </div>
    <div class="recommend-item" v-if="recommend[3]">
      <a :href="recommend[3].link">
        <img src="~assets/img/home/recom3.png" alt="" />
        <div>{{ recommend[3].title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      img: [""],
      index: 0,
    };
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding: 10px 0 12px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 75%;
  margin-bottom: 10px;
}

</style>