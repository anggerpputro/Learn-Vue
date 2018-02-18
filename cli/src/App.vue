<template>
	<div>
		<app-header></app-header>
		<app-persons></app-persons>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Persons from './components/Persons.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-persons': Persons,
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
