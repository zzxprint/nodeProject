<template>
    <div class="content-wrap">
        <!-- 列表 -->
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
                            <svg-icon v-if="item.count>0" @click="minusCommodity(item, index)" icon-class="minus"></svg-icon>
                            <span v-if="item.count>0">{{item.count}}</span>
                            <svg-icon @click="plusCommodity(item, index)" icon-class="plus"></svg-icon>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <!-- 购物车 -->
        <van-icon v-if="cartCount > 0" class="shopping-cart" name="cart-circle" :info="cartCount" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            commodity: [], //商品列表
        };
    },
    computed: {
        ...mapGetters([
            'categoryId',
            'cartList'
        ]),
        // 购物车商品数量
        cartCount() {
            let count = 0
            if(this.cartList.length != 0){
                for(let i = 0; i < this.cartList.length; i++){
                    count += this.cartList[i].count
                }
            }
            return count
        }
    },
    watch: {
        // 当前选择的分类ID
        categoryId() {
            this.getCategoryList(this.categoryId)
        }
    },
    created() {
        // 加载时默认获取商品列表,否则获取缓存列表
        if(this.categoryId == '') {
            this.getCategoryList('1')
        }else {
            this.getCategoryList(this.categoryId)
        }
    },
    methods: {
        // 请求商品信息
        getCategoryList(id) {
            let jsonName = ''
            switch(id) {
                case '1': 
                    jsonName = 'noodle.json'
                    break
                case '2': 
                    jsonName = 'chips.json'
                    break
                case '3': 
                    jsonName = 'drinks.json'
                    break
                default: 
                    jsonName = ''
                    break
            }
            // 请求商品信息
            this.$axios.get('/json/' + jsonName).then(res => {
                this.commodity = res.data
                this.commodity.forEach( ele => {
                    ele.count = 0
                })
            }).catch(err => {
                console.log(err)
            })
        },
        // 增加一个商品
        plusCommodity(item, index) {
            // 改变页面列表商品数量
            item.count++
            this.commodity.splice(index, 1, item)
            // 改变store中商品数量
            this.$store.commit('PLUS_COMMODITY', item)
        },
        // 减去一个商品
        minusCommodity(item, index) {
            // 改变页面列表商品数量
            item.count--
            this.commodity.splice(index, 1, item)
            // 改变store中商品数量
            this.$store.commit('MINUS_COMMODITY', item)
        }
    }
}
</script>

<style lang="less" scoped>
.content-wrap{
    padding-left: 190px;
    padding-right: 20px;
    background: #FFF;
    // 列表
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
    // 购物车
    .shopping-cart{
        position: absolute;
        bottom: 150px;
        right: 50px;
        color: #00AAEE;
        /deep/.van-info{
            top: -10px;
            padding: 3px 10px;
        }
    }
}
</style>
