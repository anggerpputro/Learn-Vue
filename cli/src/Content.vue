<template>
	<div>
		<h1>List of Person</h1>
		<ul>
			<li v-for="person in persons">{{ person }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			persons: ['Angger', 'Angie', 'Angel']
    	}
	},
}
</script>

<style scoped>
h1{
	color: purple;
}
</style>
