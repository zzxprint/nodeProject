<template>
    <div class="index">
        <div class="content">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.index{
    .content{
        height: auto;
        width: 100%;
        margin-bottom: 105px;
    }
}
</style>
