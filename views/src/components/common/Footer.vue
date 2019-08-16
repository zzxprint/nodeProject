<template>
    <div class="footer">
		<van-tabbar v-model="active" active-color="#00AAEE" route>
			<van-tabbar-item to="/shop" name="shop" icon="shop-o">商品</van-tabbar-item>
			<van-tabbar-item to="/cart" name="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
			<van-tabbar-item to="/order" name="order" icon="description">订单</van-tabbar-item>
			<van-tabbar-item to="/mine" name="mine" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<script>
export default {
	data () {
		return {
			active: 'shop'
		}
	}
}
</script>

<style lang="less" scoped>
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100%;
	box-shadow: 0 -2px 5px #EFEFEF;
}
</style>
