<template>
    <div class="shop">
        <shop-side></shop-side>
        <shop-list></shop-list>
    </div>
</template>

<script>
import shopSide from './shopSide'
import shopList from './shopList'
export default {
    components: {
        'shop-side': shopSide,
        'shop-list': shopList
    }
}
</script>

<style lang="less" scoped>

</style>
