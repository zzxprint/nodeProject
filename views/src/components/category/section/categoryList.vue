<template>
    <div class="category-list">
        <!-- 列表 -->
        <ul class="list-content">
            <li v-for="(item, index) in commodity" :key="index" class="commodity-box">
                <div class="img-box" @click="photoView(item.commodityImg)">
                    <img :src="item.commodityImg" alt="">
                </div>
                <div class="info-box">
                    <div class="info-title"><span>{{item.commodityName}}</span></div>
                    <div class="info-brief">{{item.commodityInfo}}</div>
                    <div class="shop-box">
                        <div class="price-box">￥{{item.commodityPrice}}</div>
                        <div class="count-box">
                            <van-icon name="cart-circle" @click="plusCommodity(item)"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ImagePreview } from 'vant';
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
    },
    watch: {
        // 当前选择的分类ID
        categoryId() {
            this.getCommodityList(this.categoryId)
        }
    },
    created() {
        // 加载时默认获取商品列表,否则获取缓存列表
        if(this.categoryId == '') {
            this.getCommodityList('1')
        }else {
            this.getCommodityList(this.categoryId)
        }
    },
    methods: {
        // 请求商品信息
        getCommodityList(categoryId) {
            let submitForm = {categoryId: categoryId}
            // 请求商品信息
            this.$axios.post('/commodity/getCommodity',submitForm).then(res => {
                this.commodity = res.data.commodityList
            }).catch(err => {
                console.log(err)
            })
        },
        // 增加一个商品
        plusCommodity(item) {
            // 改变store中商品数量
            this.$store.commit('PLUS_COMMODITY', item)
            // 生成一个球
            this.setBalloon()
        },
        // 跳转到购物车页面
        gotoCart() {
            this.$router.push('cart')
        },
        // 图片预览
        photoView(url) {
            ImagePreview([url]);
        },
        // 生成一个球
        setBalloon() {
            // 获取坐标
            let x = event.clientX
            let y = window.screen.availHeight - event.clientY
            // 获取父元素
            let parentDiv = document.querySelector('#app')
            // 生成子元素
            let childDiv = document.createElement('div')
            childDiv.className = 'drop-balloon'
            childDiv.style.left = (x - 10) + 'px'
            childDiv.style.bottom = (y - 13) + 'px'
            // 生成vant元素
            let vantDiv = document.createElement('i')
            vantDiv.className = 'van-icon van-icon-cart-circle cart-icon'
            childDiv.appendChild(vantDiv)
            // 动画
            setTimeout(() => {
                childDiv.className += ' ' + 'left'
            }, 10);
            setTimeout(() => {
                childDiv.className += ' ' + 'drop'
                vantDiv.className += ' ' + 'shrink'
            }, 30);
            // 放到父元素中
            parentDiv.appendChild(childDiv)
            // 动画执行完删除元素
            setTimeout(() => {
                let ball = document.getElementsByClassName('drop-balloon')
                ball[0].remove()
            }, 1000)
        },
    }
}
</script>

<style lang="less" scoped>
.category-list{
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
                        .van-icon{
                            font-size: 60px;
                            color: #00AAEE;
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

<style>
.drop-balloon{
    position: fixed;
    height: 60px;
    width: 60px;
    z-index: 999;
    border-radius: 50%;
    /* background: #00AAEE; */
    transition: all 1s;
}
.left{
    left: 440px !important;
    transition: all linear 0.8s;
}
.drop{
    bottom: 0px !important;
    height: 0;
    width: 0;
    transition: cubic-bezier(.5,-0.25,.9,-0.09) 0.7s;
}
.cart-icon{
    margin-bottom: 20px;
    font-size: 60px;
    color: #00AAEE;
}
.shrink{
    font-size: 1px !important;
    transition: all 1s;
}
</style>
