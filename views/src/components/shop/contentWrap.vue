<template>
    <div class="content-wrap">
        <ul class="list-content">
            <li v-for="(item, index) in commodity" :key="index" class="commodity-box">
                <div class="img-box">
                    <img :src="item.commodityImg" alt="">
                </div>
                <div class="info-box">
                    <div class="info-title"><span>{{item.commodityName}}</span></div>
                    <div class="info-brief">{{item.commodityInfo}}</div>
                    <div class="shop-box">
                        <div class="price-box">￥{{item.commodityPrice}}</div>
                        <div class="count-box">
                            <svg-icon @click="minusCommodity" v-if="item.count > 0" icon-class="minus"></svg-icon>
                            <span v-if="item.count > 0">{{item.count}}</span>
                            <svg-icon @click="plusCommodity" icon-class="plus"></svg-icon>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commodity: [], //商品列表
        };
    },
    created() {
        // 请求商品信息
        this.$axios.get('/json/commodity.json').then(res => {
            this.commodity = res.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        // 增加一个商品
        plusCommodity() {
            console.log(11)
        },
        // 减去一个商品
        minusCommodity() {
            console.log(22)
        }
    }
}
</script>

<style lang="less" scoped>
.content-wrap{
    padding-left: 190px;
    padding-right: 20px;
    background: #FFF;
    .list-content{
        height: auto;
        background: #FFF;
        .commodity-box{
            height: auto;
            padding: 25px 0;
            border-bottom: 2px solid #EEE;
            display: flex;
            align-items: center;
            .img-box{
                height: 160px;
                width: 160px;
                flex-shrink: 0;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .info-box{
                min-height: 160px;
                width: 100%;
                padding-left: 20px;
                .info-title{
                    font-size: 30px;
                    letter-spacing: 1px;
                    line-height: 40px;
                    font-weight: bold;
                }
                .info-brief{
                    margin-top: 10px;
                    letter-spacing: 1px;
                    font-size: 26px;
                    color: #999;
                }
                .shop-box{
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .price-box{
                        font-size: 32px;
                        color: #00AAEE;
                    }
                    .count-box{
                        display: flex;
                        align-items: center;
                        .svg-icon{
                            font-size: 50px;
                            cursor: pointer;
                        }
                        span{
                            display: inline-block;
                            width: 40px;
                            padding: 0 10px;
                            font-size: 32px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>
