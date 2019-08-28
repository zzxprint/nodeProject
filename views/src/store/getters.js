const getters = {
    // 商品分类
    categoryId: state => state.commodity.categoryId,
    // 购物车
    cartList: state => state.shoppingCart.cartList,
    // 购物车总金额
    cartTotalPrice: state => {
        let price = 0
        for(let i = 0; i < state.shoppingCart.cartList.length; i++){
            if(state.shoppingCart.cartList[i].selected == true){
                price += state.shoppingCart.cartList[i].count * Number(state.shoppingCart.cartList[i].commodityPrice)
            }
        }
        return price
    },
    // 购物车是否全选
    cartAllSelected: state => {
        let flag = true
        for(let i = 0; i < state.shoppingCart.cartList.length; i++){
            if(state.shoppingCart.cartList[i].selected == false){
                flag = false
                break
            }
        }
        return flag
    },
    // 购物车总数量
    cartTotalCount: state => {
        let count = 0
        if(state.shoppingCart.cartList.length != 0){
            for(let i = 0; i < state.shoppingCart.cartList.length; i++){
                count += state.shoppingCart.cartList[i].count
            }
        }
        return count
    }
}

export default getters