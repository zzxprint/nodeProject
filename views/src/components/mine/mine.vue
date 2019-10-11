<template>
    <div class="mine">
        <mine-base-info></mine-base-info>
        <mine-discount></mine-discount>
        <mine-orders></mine-orders>
    </div>
</template>

<script>
import mineBaseInfo from './section/mineBaseInfo'
import mineDiscount from './section/mineDiscount'
import mineOrders from './section/mineOrders'
export default {
    components: {
        'mine-base-info': mineBaseInfo,
        'mine-discount': mineDiscount,
        'mine-orders': mineOrders
    }
}
</script>

<style lang="less" scoped>

</style>
