<template>
	<div class="content">
		<div class="v-content">
			<h1>{{ msg }}</h1>
			<p>click</p>
			<!-- <router-view>点击跳转</router-view> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vheader',
		data () {
			return {
				msg: '子组件content'
			}
		}
	}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>