<template>
    <div class="side-list">
        <ul>
            <li 
            v-for="item in sideList" 
            :key="item.categoryId" 
            :class="{'active': item.categoryId == chooseId}"
            @click="chooseCategory(item.categoryId)"
            >
            {{item.categoryName}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sideList: [],
            chooseId: '1', // 选择的商品列表ID
        }
    },
    created() {
        this.$axios.get('/json/category.json').then(res => {
            this.sideList = res.data.category
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        // 选择商品分类
        chooseCategory(id) {
            this.chooseId = id
            this.Bus.$emit('categoryChange', id)
        }
    }
}
</script>

<style lang="less" scoped>
.side-list{
    position: fixed;
    top: 0;
    bottom: 100px;
    left: 0;
    width: 160px;
    border-right: 2px solid #efefef;
    overflow: hidden;
    ul{
        z-index: 90;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -30px;
        padding: 20px 30px 20px 0;
        background: #fefefe;
        overflow-y: auto;
        li{
            font-size: 28px;
            line-height: 90px;
            text-align: center;
        }
        .active{
            font-size: 34px;
            color: #00AAEE;
        }
    }
}
</style>
