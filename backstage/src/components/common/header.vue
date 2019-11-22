<template>
    <div class="header">
        <div class="logo">后管系统</div>
        <div class="user-info">
            <span>欢迎你！XXX</span>
            <svg-icon icon-class="userIcon"></svg-icon>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    background: #23262E;
    .logo{
        width: 200px;
        font-size: 24px;
        line-height: 60px;
        letter-spacing: 5px;
        text-align: center;
        color: #DDD;
    }
    .user-info{
        display: flex;
        align-items: center;
        margin-right: 20px;
        line-height: 60px;
        span{
            font-size: 14px;
            color: #DDD;
            margin-right: 10px;
        }
        .svg-icon{
            height: 30px;
            width: 30px;
        }
    }
}
</style>