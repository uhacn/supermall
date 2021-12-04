<template>
  <div class="calculate">
    <div class="check-content">
      <check-button
        :is-check="isCheckAll"
        class="check-button"
        @click.native="clickCheckAll"
      />
      <span>全选</span>
    </div>
    <div class="totalPrice">合计: <span>¥ </span><span>{{ totalPrice }}</span></div>
    <div class="toCalculate" @click="calcClick">结算({{ goodsCounter }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  components: {
    CheckButton,
  },
  computed: {
    // 计算总价格
    totalPrice() {
      return (
        this.$store.getters.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.count * item.newPrice;
          }, 0)
          .toFixed(2)
      );
    },
    // 计算选中的商品数量
    goodsCounter() {
      return this.$store.getters.cartList.filter((item) => {
        return item.check;
      }).length;
    },
    // 判断是否全选
    isCheckAll() {
      if (!this.$store.getters.cartList.length) return false;
      return !this.$store.getters.cartList.some((item) => {
        return !item.check;
      });
    },
  },
  methods: {
    // 点击全选按钮选中全部商品
    clickCheckAll() {
      if (this.isCheckAll) {
        this.$store.getters.cartList.forEach((item) => (item.check = false));
      } else {
        this.$store.getters.cartList.forEach((item) => (item.check = true));
      }
    },
    // 未选中商品时提示
    calcClick() {
      if(!this.isCheckAll) {
        this.$toast.show('请选择购买的商品', 1000)
      }
    }
  },
};
</script>

<style scoped>
.calculate {
  position: relative;
  display: flex;

  height: 40px;
  line-height: 40px;

  background-color: #eee;
}

.check-content {
  display: flex;
  width: 60px;
  align-items: center;
  margin-left: 12px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.totalPrice {
  flex: 1;
  margin-left: 20px;
}

.totalPrice span {
  font-weight: 700;
  color: rgb(248, 110, 46);
}
.totalPrice span:first-child {
  font-size: 14px;
}

.totalPrice span:last-child {
  font-size: 20px;
}

.toCalculate {
  width: 100px;
  background-color: var( --color-tint);
  color: #fff;
  text-align: center;
}
</style>