<template>
    <div class="shop-list">
        <ul class="list-content">
            <li class="commodity-box"></li>
            <li class="commodity-box"></li>
            <li class="commodity-box"></li>
            <li class="commodity-box"></li>
            <li class="commodity-box"></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.shop-list{
    width: 100%;
    .list-content{
        margin-top: 15px;
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .commodity-box{
            height: 450px;
            width: 345px;
            background: #FFF;
            margin-bottom: 15px;
            border-radius: 10px;
        }
    }
}
</style>