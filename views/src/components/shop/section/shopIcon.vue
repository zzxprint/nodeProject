<template>
    <div class="shop-icon">
        <van-row type="flex" justify="space-around">
            <van-col span="5">
                <svg-icon icon-class="noodles"></svg-icon>
                <span>美味泡面</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="chips"></svg-icon>
                <span>休闲薯片</span>
            </van-col>
            <van-col span="5"><svg-icon icon-class="drinks"></svg-icon></van-col>
            <van-col span="5"></van-col>
        </van-row>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.shop-icon{
    height: 300px;
    .van-row{
        padding-top: 20px;
        .van-col{
            text-align: center;
            .svg-icon{
                height: 100px;
                width: 100px;
            }
            span{
                display: block;
                font-size: 30px;
                text-align: center;
                margin-top: 15px;
                color: #666;
            }
        }
    }
}
</style>
