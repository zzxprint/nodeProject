<template>
    <div class="header">
        <van-sticky>
            <div class="header-content">
                <van-icon class="header-backicon" name="arrow-left" @click="goBack" />
                <div class="header-title">{{title}}</div>
            </div>
        </van-sticky>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    .header-content{
        height: 100px;
        width: 100%;
        background: #F5F5F5;
        position: relative;
        .header-backicon{
            position: absolute;
            left: 15px;
            top: 50%;
            margin-top: -28px;
            font-size: 50px;
            color: #999;
        }
        .header-title{
            width: 60%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            margin: 0 auto;
            font-size: 32px;
            color: #666;
        }
    }
}
</style>