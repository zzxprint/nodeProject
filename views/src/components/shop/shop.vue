<template>
    <div class="shop">
        <side-list></side-list>
        <content-wrap></content-wrap>
    </div>
</template>

<script>
import sideList from './sideList'
import contentWrap from './contentWrap'
export default {
    components: {
        'side-list': sideList,
        'content-wrap': contentWrap
    },
    data() {
        return {
        };
	},
	created() {
	},
    methods: {
    }
}
</script>

<style lang="less" scoped>

</style>
