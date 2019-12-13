<template>
    <div class="insert-commodity">
        <!-- 录入商品 -->
        <div class="insert-content">
            <el-card class="box-card">
                <div class="title">录入商品</div>
                <insert-form :categoryList="categoryList"></insert-form>
            </el-card>
        </div>
        <!-- 展示商品 -->
        <div class="insert-content">
            <el-card class="box-card">
                <div class="title warning">商品列表</div>
                <commodity-list :categoryList="categoryList"></commodity-list>
            </el-card>
        </div>
    </div>
</template>

<script>
import insertForm from './section/insertForm'
import commodityList from './section/commodityList'
export default {
    components: {
        'insert-form': insertForm,
        'commodity-list': commodityList
    },
    data() {
        return {
            categoryList: [], //商品分类列表
        }
    },
    created() {
        this.getCategory(); // 获取商品分类
    },
    methods: {
        // 获取商品分类
        getCategory() {
            this.$axios.post('/api/category/getAllCategory').then(res => {
                this.categoryList = res.data.category
            }).catch(err => {
                console.log(err)
            })
        },
    }
}
</script>

<style lang="less" scoped>
.insert-commodity{
    display: flex;
    justify-content: space-between;
    .insert-content{
        width: 49%;
        min-width: 600px;
        margin-left: 10px;
        .title{
            margin: 8px 0 20px;
            padding: 8px 16px;
            box-sizing: border-box;
            border-radius: 4px;
            border-left: 5px solid #50bfff;
            background-color: #ecf8ff;
        }
        .warning{
            background-color: #fff6f7;
            border-left: 5px solid #fe6c6f;
        }
        /deep/.el-card{
            height: 100%;
            .el-card__body{
                display: flex;
                flex-direction: column;
                height: 100%;
                box-sizing: border-box;
            }
        }
    }
}
</style>