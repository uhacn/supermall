const mutations = {
  addCart(state, goods) {
    // 1.查看是否添加过
    let oldGoods = state.cartList.find(item => item.iid === goods.iid)

    // 2.商品数量+1 或者 新添加
    if (oldGoods) {
      oldGoods.count += 1
    } else {
      goods.count = 1;
      goods.check = true;
      state.cartList.push(goods)
    }
  }
}

export default mutations
