<template>
    <div class="content-wrap">
        <ul class="list-content">
            <li class="commodity-box">
                <div class="img-box">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="info-box">
                    <div class="info-title"><span>商品名称商品名称商品名称商品名称</span></div>
                    <div class="info-brief">商品简介</div>
                    <div class="shop-box">
                        <div class="price-box">￥8.88</div>
                        <div class="cart-btn"><van-icon name="cart-circle" info="9" /></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

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
            padding: 20px 0;
            border-bottom: 2px solid #EEE;
            display: flex;
            align-items: center;
            .img-box{
                height: 200px;
                width: 200px;
                flex-shrink: 0;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .info-box{
                min-height: 200px;
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
                    .price-box{
                        font-size: 32px
                    }
                }
            }
        }
    }
}
</style>
