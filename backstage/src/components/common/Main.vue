<template>
    <div class="Main">
        <el-scrollbar>
            <router-view />
        </el-scrollbar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Main{
    position: fixed;
    left: 220px;
    right: 0;
    top: 60px;
    bottom: 0;
    width: auto;
    overflow: hidden;
    box-sizing: border-box;
    background: #F5F6FA;
    margin: 15px;
    /deep/ .el-scrollbar{
        height: 100%;
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
}
</style>