<template>
    <div class="shop">
        <shop-carousel></shop-carousel>
        <shop-icon></shop-icon>
    </div>
</template>

<script>
import shopCarousel from './section/shopCarousel'
import shopIcon from './section/shopIcon'
export default {
    components: {
        'shop-carousel': shopCarousel,
        'shop-icon': shopIcon
    }
}
</script>

<style lang="less" scoped>

</style>
