<template>
    <div class="mine">
        <mine-base-info></mine-base-info>
        <mine-discount></mine-discount>
    </div>
</template>

<script>
import mineBaseInfo from './mineBaseInfo'
import mineDiscount from './mineDiscount'
export default {
    components: {
        'mine-base-info': mineBaseInfo,
        'mine-discount': mineDiscount
    }
}
</script>

<style lang="less" scoped>

</style>
