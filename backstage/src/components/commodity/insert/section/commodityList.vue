<template>
    <div class="commodity-list">
        <!-- 商品分类 -->
        <div class="side-list">
            <el-scrollbar>
                <ul>
                    <li v-for="item in categoryList"
                        :key="item.id"
                        :class="{'active': item.categoryId == chooseId}"
                        @click="chooseCategory(item.categoryId)">
                        {{item.categoryName}}
                    </li>
                </ul>
            </el-scrollbar>
        </div>
        <!-- 商品列表 -->
        <div class="item-list">
            <el-scrollbar>
                <div class="item-content">
                    <div class="commodity-pad" v-for="item in commodityList" :key="item.id">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <img :src="item.commodityImg" class="image">
                            <div style="padding: 14px;">
                                <div class="commodity-id">
                                    <span>条形码:{{item.commodityId}}</span>
                                </div>
                                <div class="commodity-title">
                                    <span>{{item.commodityName}}</span>
                                </div>
                                <div class="commodity-info">
                                    <span>{{item.commodityInfo}}</span>
                                </div>
                                <div class="commodity-price">
                                    <span>￥{{item.commodityPrice}}</span>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 商品分类列表
        categoryList: {
            type: Array
        }
    },
    data() {
        return {
            chooseId: '1', // 选择的商品分类ID
            commodityList: [], //商品列表
        }
    },
    created() {
        this.getCommodityList()
    },
    methods: {
        // 选择商品分类
        chooseCategory(id) {
            if(id == this.chooseId) {
                return
            }
            this.chooseId = id
            this.getCommodityList() //请求商品列表
        },
        // 请求商品列表
        getCommodityList() {
            let submitForm = {categoryId: this.chooseId}
            // 请求商品信息
            this.$axios.post('/api/commodity/getCommodity',submitForm).then(res => {
                this.commodityList = res.data.commodityList
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.commodity-list{
    height: 100%;
    position: relative;
    display: flex;
    // 商品分类
    .side-list{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100px;
        border-right: 1px solid #EFEFEF;
        ul{
            top: 0;
            bottom: 0;
            left: 0;
            right: -10px;
            overflow: auto;
            li{
                font-size: 16px;
                line-height: 40px;
                text-align: center;
                transition: font-size .1s;
                cursor: pointer;
            }
            .active{
                font-size: 20px;
                color: #00AAEE;
                transition: font-size .1s;
            }
        }
    }
    // 商品列表
    .item-list{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 110px;
        right: 0;
        .item-content{
            display: flex;
            flex-wrap: wrap;
            &::after{
                content: '';
                flex: 1;
            }
            .commodity-pad{
                width: 32%;
                min-width: 200px;
                margin-bottom: 15px;
                margin-left: 5px;
                .commodity-id{
                    letter-spacing: 1px;
                    color: #00AAEE;
                }
                .commodity-title{
                    margin-top: 5px;
                    font-weight: bold;
                }
                .commodity-info{
                    margin-top: 5px;
                    font-size: 15px;
                    color: #999;
                }
                .commodity-price{
                    margin-top: 5px;
                    color: #00AAEE;
                }
                /deep/ .el-card{
                    .image{
                        height: 198px;
                    }
                }
            }
        }
    }
}
</style>