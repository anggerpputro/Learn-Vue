<template>
	<div>
		<h1>Vue.js App</h1>
		<mycontent></mycontent>
	</div>
</template>

<script>
import Content from './Content.vue'

export default {
	components: {
		'mycontent': Content
	},
	data () {
		return {
    	}
	},
}
</script>

<style scoped>
h1{
	color:green;
}
</style>
