<template>
    <div class="shop">
        <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @click-nav="onClickNav"
        @click-item="onClickItem"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            mainActiveIndex: 0,
			activeId: 1,
        };
	},
	created() {
		this.items = this.$util.shopList()
	},
    methods: {
        onClickNav (index) {
            this.mainActiveIndex = index
        },
        onClickItem (data) {
            this.activeId = data.id
        }
    }
}
</script>

<style lang="less" scoped>

</style>
