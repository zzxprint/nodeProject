<template>
    <div class="cart-list">
        <!-- 列表 -->
        <ul class="list-content">
            <van-swipe-cell v-for="(item, index) in cartList" :key="index">
                <li class="commodity-box">
                    <div class="select-btn">
                        <van-checkbox v-model="item.selected"></van-checkbox>
                    </div>
                    <div class="img-box">
                        <img :src="item.commodityImg" alt="">
                    </div>
                    <div class="info-box">
                        <div class="info-title"><span>{{item.commodityName}}</span></div>
                        <div class="info-brief">{{item.commodityInfo}}</div>
                        <div class="shop-box">
                            <div class="price-box">￥{{item.commodityPrice}}</div>
                            <div class="count-box">
                                <svg-icon v-if="item.count>0" @click="minusCommodity(item, index)" icon-class="minus"></svg-icon>
                                <span v-if="item.count>0">{{item.count}}</span>
                                <svg-icon @click="plusCommodity(item, index)" icon-class="plus"></svg-icon>
                            </div>
                        </div>
                    </div>
                </li>
                <template slot="right">
                    <van-button block square type="danger" text="删除" @click="deleteCommodity(item, index)"/>
                </template>
            </van-swipe-cell>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters([
            'cartList'
        ])
    },
    methods: {
        // 删除一个购物车商品
        deleteCommodity(item, index) {
            this.$dialog.confirm({
                message: '删除商品？'
            }).then(() => {
                // 购物车删除一个商品
                this.$store.commit('DELETE_COMMODITY', item)
            }).catch(() => {})
        },
        // 增加一个商品
        plusCommodity(item, index) {
            this.$store.commit('PLUS_COMMODITY', item)
        },
        // 减少一个商品
        minusCommodity(item, index) {
            if(item.count == 1){
                this.$dialog.confirm({
                    message: '删除商品？'
                }).then(() => {
                    // 购物车删除一个商品
                    this.$store.commit('DELETE_COMMODITY', item)
                }).catch(() => {})
            }else{
                this.$store.commit('MINUS_COMMODITY', item)
            }
        },
    }
}
</script>

<style lang="less" scoped>
.cart-list{
    background: #FFF;
    margin-bottom: 201px;
    // 列表
    .list-content{
        height: auto;
        background: #FFF;
        .commodity-box{
            height: auto;
            padding: 25px 20px;
            border-bottom: 2px solid #EEE;
            display: flex;
            align-items: center;
            .select-btn{
                height: 160px;
                width: 80px;
                padding-right: 20px;
                margin-right: 20px;
                flex-shrink: 0;
                border-right: 2px solid #EEE;
                display: flex;
                align-items: center;
                justify-content: center;
                // 覆盖样式
                /deep/ .van-checkbox__icon--checked .van-icon{
                    background: #00AAEE;
                    border-color: #00AAEE;
                }
            }
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
                        span{
                            width: 40px;
                            padding: 0 10px;
                            font-size: 32px;
                            justify-content: center;
                            text-align: center;
                        }
                        .svg-icon{
                            font-size: 50px;
                        }
                    }
                }
            }
        }
    }
    // 覆盖vant样式
    /deep/ .van-swipe-cell .van-button{
        height: 100%;
        width: 100%;
    }
}
</style>
