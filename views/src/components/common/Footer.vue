<template>
  <div class="Footer">
    <van-tabbar v-model="active" @change="changeIndex">
      <van-tabbar-item name="shop" icon="shop-o">商品</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="order" icon="description">订单</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'shop'
    }
  },
  created () {
    this.active = window.location.hash.split('/')[1]
  },
  methods: {
    changeIndex () {
      this.$router.push('/' + this.active)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
