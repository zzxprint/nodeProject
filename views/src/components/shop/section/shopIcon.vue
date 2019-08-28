<template>
    <div class="shop-icon">
        <van-row type="flex" justify="space-around">
            <van-col span="5">
                <svg-icon icon-class="noodles"></svg-icon>
                <span>泡面</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="chips"></svg-icon>
                <span>薯片</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="drinks"></svg-icon>
                <span>饮料</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="chocolate"></svg-icon>
                <span>巧克力</span>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
            <van-col span="5">
                <svg-icon icon-class="milk"></svg-icon>
                <span>奶品</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="bread"></svg-icon>
                <span>面包</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="biscuit"></svg-icon>
                <span>饼干</span>
            </van-col>
            <van-col span="5">
                <svg-icon icon-class="more"></svg-icon>
                <span>更多</span>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.shop-icon{
    padding: 10px 0 30px 0;
    background: #FFF;
    .van-row{
        padding-top: 30px;
        .van-col{
            text-align: center;
            .svg-icon{
                height: 90px;
                width: 90px;
            }
            span{
                display: block;
                font-size: 26px;
                text-align: center;
                margin-top: 15px;
                color: #777;
            }
        }
    }
}
</style>
