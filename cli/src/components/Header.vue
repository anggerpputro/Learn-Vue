<template lang="html">
  <header>
  	<h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
	data () {
		return {
			title: 'Vue.js App'
		}
	}
}
</script>

<style lang="css" scoped>
header{
	background-color: lightgreen;
	padding: 10px;
}
h1{
	color: #222;
	text-align: center;
}
</style>
