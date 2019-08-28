<template>
    <div class="shop">
        <shop-carousel></shop-carousel>
        <shop-search></shop-search>
        <shop-icon></shop-icon>
    </div>
</template>

<script>
import shopCarousel from './section/shopCarousel'
import shopSearch from './section/shopSearch'
import shopIcon from './section/shopIcon'
export default {
    components: {
        'shop-carousel': shopCarousel,
        'shop-search': shopSearch,
        'shop-icon': shopIcon
    }
}
</script>

<style lang="less" scoped>

</style>
