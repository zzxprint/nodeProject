<template>
    <div class="mine-baseInfo">
        <div class="base-content">
            <div class="mine-photo"></div>
            <div class="mine-info">
                <div class="mine-name">用户名</div>
                <div class="mine-phone">15757480057</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mine-baseInfo{
    height: 320px;
    width: 100%;
    background: #00AAEE;
    box-shadow: 0 5px 5px #DEDEDE;
    .base-content{
        height: 240px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .mine-photo{
            height: 120px;
            width: 120px;
            border-radius: 60px;
            background: #FFF;
            flex-shrink: 0;
        }
        .mine-info{
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 20px;
            .mine-name{
                font-size: 36px;
                color: #FFF;
            }
            .mine-phone{
                font-size: 30px;
                color: #FFF;
            }
        }
    }
}
</style>
