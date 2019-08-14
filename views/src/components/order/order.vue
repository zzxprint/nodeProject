<template>
    <div class="order">
        order
        <button @click="go">进入</button>
    </div>
</template>

<script>
export default {
  methods: {
    go () {
      this.$router.push('order/orderDetail')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
