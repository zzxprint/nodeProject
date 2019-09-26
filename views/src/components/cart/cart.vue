<template>
    <div class="cart">
        <!-- 头部 -->
        <Header></Header>
        <!-- 购物车列表 -->
        <cart-list></cart-list>
        <!-- 订单提交 -->
        <cart-submit></cart-submit>
    </div>
</template>

<script>
import cartList from './section/cartList'
import cartSubmit from './section/cartSubmit'
export default {
    components: {
        'cart-list': cartList,
        'cart-submit': cartSubmit
    },
    methods: {
        // 返回上一级
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
