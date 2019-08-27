<template>
    <div class="category">
        <category-side></category-side>
        <category-list></category-list>
    </div>
</template>

<script>
import categorySide from './section/categorySide'
import categoryList from './section/categoryList'
export default {
    components: {
        'category-side': categorySide,
        'category-list': categoryList
    }
}
</script>

<style lang="less" scoped>

</style>
