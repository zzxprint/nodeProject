<template>
    <div class="checkout">
        <!-- 头部 -->
        <Header title="结算"></Header>
        <!-- 地址信息 -->
        <user-address></user-address>
        <!-- 订单内的商品 -->
        <order-list></order-list>
    </div>
</template>

<script>
import userAddress from './section/userAddress'
import orderList from './section/orderList'
export default {
    components: {
        'user-address': userAddress,
        'order-list': orderList,
    },
}
</script>

<style>

</style>