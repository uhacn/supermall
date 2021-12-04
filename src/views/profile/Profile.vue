<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
    <user-info class="user-info"></user-info>
    <!-- 不单独封装: 不同的地方太多, 需要传过多的参数 -->
    <div class="account">
      <div class="account-item">
        <div class="account-item-number">
          <span class="quantity">0.00</span>
          <span> 元</span>
        </div>
        <div class="account-item-title">我的余额</div>
      </div>
      <div class="account-item">
        <div class="account-item-number">
          <span class="quantity">3</span>
          <span> 张</span>
        </div>
        <div class="account-item-title">优惠券</div>
      </div>
      <div class="account-item">
        <div class="account-item-number">
          <span class="quantity">666</span>
          <span> 分</span>
        </div>
        <div class="account-item-title">购物积分</div>
      </div>
    </div>
    <list-show :list-data="orderList" class="order-list"> </list-show>
    <list-show :list-data="serviceList" class="service-list"> </list-show>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import UserInfo from "./childComps/UserInfo.vue";
import ListShow from "./childComps/ListShow.vue";

export default {
  components: {
    NavBar,
    UserInfo,
    ListShow,
  },
  data() {
    return {
      orderList: [
        { icon: "#order", iconColor: "#ff8198", info: "我的消息" },
        { icon: "#point", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "#vip", iconColor: "#ffc636", info: "会员卡" },
      ],
      serviceList: [
        { icon: "#service", iconColor: "#fa7c28", info: "我的购物车" },
        { icon: "#download", iconColor: "#369e3f", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.user-info {
  border-top: 1px solid rgba(245, 143, 60, 0.966);
}
.account {
  display: flex;
  background-color: #fff;
}

.account-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}

.account-item:last-child {
  border-right: 0;
}

.account-item-number {
  margin-top: 20px;
  font-size: 12px;
}
.account-item-number .quantity {
  font-size: 24px;
  color: #f57931;
  font-weight: bold;
}
.account-item-title {
  margin: 12px 0 18px;
  font-size: 14px;
}

.order-list,
.service-list {
  margin-top: 15px;
}
</style>