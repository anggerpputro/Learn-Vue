new Vue({
	el: '#vue-app',
	data: {
		nama: 'Angger',
		pekerjaan: 'Programmer',
		// Data Binding
		website: 'http://facebook.com',
		// Events
		umur: 24,
		X: 0,
		Y: 0,
		// 2-Way Data Binding
		alamat: '',
		// Computed Properties
		a: 0,
		b: 0,
		c: 0,
		// Dynamic CSS Classes
		nearby: false,
		available: false,
	},
	methods: {
		sapa: function(waktu = 'Pagi'){
			return 'Selamat ' + waktu + ' ' + this.nama;
		},
		// Events
		tambahUmur: function(tambah = 1){
			this.umur += tambah;
		},
		kurangUmur: function(kurang = 1){
			this.umur -= kurang;
		},
		updateXY: function(event){
			this.X = event.offsetX;
			this.Y = event.offsetY;
		},
		// Computed Properties
		addToA: function(){
			console.log('Add To A');
			return this.umur + this.a;
		},
		addToB: function(){
			console.log('Add To B');
			return this.umur + this.b;
		}
	},
	computed: {
		// Computed Properties
		addToC: function(){
			console.log('Add To C');
			return this.umur + this.c;
		},
		// Dynamic CSS Classes
		compClasses: function(){
			return {
				nearby: this.nearby,
				available: this.available,
			};
		}
	}
});
