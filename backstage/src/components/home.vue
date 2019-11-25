<template>
    <div class="home">
        <!-- 头部信息 -->
        <Header></Header>
        <!-- 侧边栏 -->
        <side-bar></side-bar>
        <!-- 主要内容 -->
        <Main></Main>
    </div>
</template>

<script>
import Header from './common/Header'
import SideBar from './common/SideBar'
import Main from './common/Main'
export default {
    components:{
        'Header': Header,
        'side-bar': SideBar,
        'Main': Main
    }
}
</script>

<style>

</style>