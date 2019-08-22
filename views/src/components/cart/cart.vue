<template>
    <div class="cart">
        <cart-list></cart-list>
    </div>
</template>

<script>
import cartList from './cartList'
export default {
    components: {
        'cart-list': cartList
    }
}
</script>

<style lang="less" scoped>

</style>
