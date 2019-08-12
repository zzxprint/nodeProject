<template>
	<div class="HelloWorld">
		<van-cell-group>
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" is-link value="内容" />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
		</van-cell-group>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
