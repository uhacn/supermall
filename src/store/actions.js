export default {
  addCart(context, goods) {
    return new Promise((resolve, reject) => {
      // 1.查看是否添加过
      const oldGoods = context.state.cartList.find(item => item.iid === goods.iid)

      // 2.商品数量+1 或者 新添加
      if (oldGoods) {
        oldGoods.count += 1
        resolve('商品数量加一')
      } else {
        goods.count = 1;
        goods.check = true;
        context.state.cartList.push(goods)
        resolve('添加新商品')
      }
    })
  }
}