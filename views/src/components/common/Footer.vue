<template>
    <div class="Footer">
		<van-tabbar v-model="active" route>
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
</style>
