<template>
	<div>
		<h1>Vue.js</h1>
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
