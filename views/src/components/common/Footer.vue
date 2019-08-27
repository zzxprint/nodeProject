<template>
    <div class="footer">
		<van-tabbar v-model="active" active-color="#00AAEE" route>
			<van-tabbar-item to="/" name="shop" icon="shop-o">首页</van-tabbar-item>
			<van-tabbar-item to="/category" name="order" icon="description">分类</van-tabbar-item>
			<van-tabbar-item to="/cart" name="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
			<van-tabbar-item to="/mine" name="mine" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<script>
export default {
	data () {
		return {
			active: '/'
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
