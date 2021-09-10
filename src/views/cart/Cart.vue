<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ count }})</div>
    </nav-bar>
    <cart-list :cart-list="list"/>
    <cart-calculate />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childCompn/CartList.vue"
import CartCalculate from './childCompn/CartCalculate.vue'

import { mapGetters } from "vuex";


export default {
  components: {
    NavBar,
    CartList,
    CartCalculate
  },
  computed: {
    // 两种语法
    // ...mapGetters(['cartList', 'cartCount'])
    ...mapGetters({
      count: 'cartCount',
      list: 'cartList'
    }),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}


.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
  font-weight: 700;
}
</style>