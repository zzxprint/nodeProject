<template>
    <div class="cart">
        <cart-list></cart-list>
        <cart-submit></cart-submit>
    </div>
</template>

<script>
import cartList from './cartList'
import cartSubmit from './cartSubmit'
export default {
    components: {
        'cart-list': cartList,
        'cart-submit': cartSubmit
    }
}
</script>

<style lang="less" scoped>

</style>
