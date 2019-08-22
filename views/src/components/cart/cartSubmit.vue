<template>
    <div class="cart-submit">
        <van-submit-bar
        :price="cartTotalPrice*100"
        button-text="提交订单"
        @submit="submitOrder"
        >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            checked: ''
        }
    },
    computed: {
        ...mapGetters([
            'cartTotalPrice'
        ])
    },
    methods: {
        submitOrder() {

        }
    }
}
</script>

<style lang="less" scoped>
.cart-submit{
    // 覆盖样式
    /deep/ .van-submit-bar{
        padding-left: 20px;
        box-sizing: border-box;
        // 全选
        .van-checkbox__icon--checked .van-icon{
            background: #00AAEE;
            border-color: #00AAEE;
        }
        // 价格
        .van-submit-bar__price{
            color: #00AAEE;
        }
        // 提交按钮
        .van-button--danger{
            background: #00AAEE;
            border: 1px solid #00AAEE;
        }
    }
}
</style>
