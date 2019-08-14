<template>
  <div class="Footer">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/shop" icon="shop-o">商品</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/order" icon="description">订单</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    changeActive () {
    }
  }
}
</script>

<style lang="less" scoped>
</style>
