<template>
	<div>
		<app-header></app-header>
		<app-persons v-bind:persons="persons"></app-persons>
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
			persons: [
				{name: 'Angger', age: 24, show: false},
				{name: 'Angie', age: 19, show: false},
				{name: 'Angel', age: 8, show: false},
				{name: 'Eno', age: 21, show: false},
				{name: 'Neva', age: 18, show: false},
			]
    	}
	},
}
</script>

<style scoped>
h1{
	color:green;
}
</style>
