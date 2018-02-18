<template lang="html">
  <footer>
	  <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
	data () {
		return {
			copyright: 'Copyright 2018 Angger Priyardhan'
		}
	}
}
</script>

<style lang="css" scoped>
footer{
	background-color: #222;
	padding: 5px;
}
p{
	color: lightgreen;
	text-align: center;
}
</style>
