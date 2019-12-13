<template>
    <div class="shop-list">
        <!-- 商品列表 -->
        <ul class="list-content">
            <li class="commodity-box" v-for="item in commodityList" :key="item.id">
                <!-- 商品图片 -->
                <img class="commodity-image" :src="item.commodityImg">
                <div class="commodity-content">
                    <!-- 商品标题 -->
                    <div class="content-title">{{item.commodityName}}</div>
                    <!-- 商品简介 -->
                    <div class="content-info">{{item.commodityInfo}}</div>
                    <!-- 价格以及购物车图标 -->
                    <div class="content-shop">
                        <div class="shop-price">
                            <span>￥</span><span>{{item.commodityPrice}}</span>
                        </div>
                        <div class="shop-cart">
                            <van-icon name="cart-circle" @click="plusCommodity(item)"/>
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
            commodityList: [], //商品列表
        }
    },
    created() {
        this.getRandomCommodity()
    },
    methods: {
        // 获取随机N条商品信息
        getRandomCommodity() {
            this.$axios.post('/commodity/getRandomCommodity', {size: 8}).then(res => {
                this.commodityList = res.data.commodityList
            }).catch(err => {
                console.log(err)
            })
        },
        // 加入购物车
        plusCommodity(item) {
            // 改变store中商品数量
            this.$store.commit('PLUS_COMMODITY', item)
            // 生成一个球
            this.setBalloon()
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
.shop-list{
    width: 100%;
    .list-content{
        margin-top: 15px;
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .commodity-box{
            display: flex;
            flex-direction: column;
            width: 345px;
            background: #FFF;
            margin-bottom: 15px;
            border-radius: 10px;
            .commodity-image{
                width: 345px;
                height: 345px;
            }
            .commodity-content{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding: 14px;
                .content-title{
                    font-size: 28px;
                    font-weight: bold;
                }
                .content-info{
                    margin: 10px 0 20px;
                    font-size: 26px;
                    color: #999;
                    letter-spacing: 1px;
                }
                .content-shop{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                    .shop-price{
                        font-size: 32px;
                        color: #00AAEE;
                        span{
                            &:first-child{
                                font-size: 22px;
                            }
                        }
                    }
                    .shop-cart{
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
    font-size: 60px;
    color: #00AAEE;
}
.shrink{
    font-size: 1px !important;
    transition: all 1s;
}
</style>