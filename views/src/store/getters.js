const getters = {
    // 商品分类
    categoryId: state => state.commodity.categoryId,
    // 购物车
    cartList: state => state.shoppingCart.cartList
}

export default getters