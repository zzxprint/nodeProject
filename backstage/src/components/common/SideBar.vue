<template>
    <div class="side-bar">
        <el-scrollbar>
            <el-menu
            router
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/insertCommodity">新增商品</el-menu-item>
                        <el-menu-item index="/manageCommodity">管理商品</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.side-bar{
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    box-sizing: border-box;
    width: 220px;
    overflow: hidden;
    background: #545C64;
    /deep/ .el-scrollbar{
        height: 100%;
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
        .el-menu{
            border-right: none;
        }
    }
}
</style>