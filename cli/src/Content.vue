<template>
	<ul>
		<li v-for="person in persons">{{ person }}</li>
	</ul>
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
