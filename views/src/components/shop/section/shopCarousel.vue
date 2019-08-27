<template>
    <div class="shop-carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.shop-carousel{
    height: 420px;
    width: 100%;
    .van-swipe{
        height: 100%;
        .van-swipe-item{
            line-height: 420px;
            text-align: center;
            background: #00AAEE;
            color: #FFF;
            &:nth-child(2){
                background: #00BBCC;
            }
            &:nth-child(4){
                background: #00BBCC;
            }
        }
    }
}
</style>
