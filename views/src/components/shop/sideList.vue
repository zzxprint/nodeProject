<template>
    <div class="side-list">
        <ul>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
            <li>酒水</li>
            <li>饮料</li>
            <li>零食</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.side-list{
    position: fixed;
    top: 0;
    bottom: 100px;
    left: 0;
    width: 160px;
    border-right: 2px solid #efefef;
    overflow: hidden;
    ul{
        z-index: 90;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -30px;
        padding: 20px 30px 20px 0;
        background: #fefefe;
        overflow-y: auto;
        li{
            font-size: 28px;
            line-height: 90px;
            text-align: center;
        }
    }
}
</style>
