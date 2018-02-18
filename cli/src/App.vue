<template>
	<div>
		<h1>Vue.js</h1>
		<p>{{ greeting() }}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name: 'Angger'
    	}
	},
	methods: {
		greeting: function(){
			return 'Hello ' + this.name;
		}
	}
}
</script>
