<template>
	<div id="app">
		<div class="svg-container">
			<svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet" class="svg-content">
				<defs>
				<path d="M259.075024,489.814448 C379.566127,489.814448 374.977008,386.515923 374.977008,286.355852 C374.977008,186.195781 338.659544,105 218.168441,105 C97.6773382,105 0,186.195781 0,286.355852 C0,386.515923 138.583921,489.814448 259.075024,489.814448 Z" id="path-1"></path>
				<pattern id="pattern-2" width="16.3308824" height="16.3308824" x="-16.3308824" y="88.6691176" patternUnits="userSpaceOnUse">
					<use xlink:href="#image-3" transform="scale(0.340226716,0.340226716)"></use>
				</pattern>
				<image id="image-3" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAABX0lEQVRoBe3Y7Q2CMBAGYGu3gOgOJrAQcRAHUXcwrsEcrFH7agpB+ex5cJfQH9ISvfO5xkjP5Hnudn445+5lWZ4xxZo4TJZlV2NMEeJwxbdpml6QxCc7JUlyqKrqGZJSroiDeIjLGd/6JEfuJJzx7VKV4kJYbK9mxBugGVEDtCJaAI2IH4A2RCdAE6IXoAUxCNCAGAVIR0wCSEZMBkhFzAJIRMwGSENEASQhogFSECSABAQZsDYCAIMvQR1rHYqs7x7ckJwKwOfXQKAr8dDYjQhn7D0q5xcF+jiYYk0cDv0l9IFCHM74W18oVLnrusRvYusLdVX++x7nTtR/ZJxJAOKKXwM4k4Qd4UC0ABoRPwBtiE6AJkQvQAtiEKABMQqQjpgEkIyYDJCKmAWQiJgNkIaIAkhCRAOkIEgACQgyYG0EAP84yLM976NAGH2P4ltf6FOf5rWvUrjfvCt+9h3/BX5SBuUP9sYWAAAAAElFTkSuQmCC"></image>
				<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
					<stop stop-color="#FF9900" offset="0%"></stop>
					<stop stop-color="#FFAA00" offset="100%"></stop>
				</linearGradient>
			</defs>
				<g id="bg" transform="translate(-74.000000, -165.000000)">
					<g id="Oval-4">
						<use fill="#212C67" xlink:href="#path-1"></use>
						<use fill-opacity="0.109999999" fill="url(#pattern-2)" style="mix-blend-mode: screen;" xlink:href="#path-1"></use>
					</g>
					<path d="M361.730441,411.490585 C457.057846,463.590257 529.372811,302.280752 529.372811,213.915192 C529.372811,125.549632 487.687485,50.1810446 399.321925,50.1810446 C310.956365,50.1810446 245.563193,84.9141445 239.321925,210.181045 C233.080657,335.447945 266.403037,359.390913 361.730441,411.490585 Z" id="Oval-4-Copy" fill="#27347D" transform="translate(383.983481, 235.904389) scale(-1, 1) rotate(-35.000000) translate(-383.983481, -235.904389) "></path>
					<path d="M381.643624,451.381139 C443.294814,451.381139 463.025035,302.706624 466.013323,237.614318 C469.001611,172.522012 458.52407,119.650283 396.87288,119.650283 C335.221689,119.650283 337.21945,163.01565 285.243525,237.244964 C233.2676,311.474278 319.992434,451.381139 381.643624,451.381139 Z" id="Oval-4-Copy-2" fill="url(#linearGradient-4)" transform="translate(367.897042, 285.515711) scale(-1, 1) rotate(-35.000000) translate(-367.897042, -285.515711) "></path>
			</g>
			</svg>
		</div>
		<div>
		<b-navbar toggleable="lg" type="dark" variant="info" fixed="top" class="transparent" v-show="!($route.name == 'customer')">
			<b-navbar-brand href="#">Sofa Expert</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="customer">Customer View</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<b-form v-show="$route.name == 'customer'" >
			<b-form-group>
				<b-form-input class="search"></b-form-input>
			</b-form-group>
		</b-form>
		<router-view></router-view>
		<b-navbar type="dark" variant="light" fixed="bottom" style="border-top: 1px solid #eee;" v-show="!($route.name == 'customer')">
			<b-nav pills align="center" class="fullwidth">
				<b-nav-item class="button-item" >My Shop</b-nav-item>
				<b-nav-item class="button-item" :to="{'name': 'model'}">Models</b-nav-item>
				<b-nav-item class="button-item">Notes</b-nav-item>
				<b-nav-item class="button-item">Account</b-nav-item>
			</b-nav>
		</b-navbar>
		<b-navbar type="dark" variant="light" fixed="bottom" style="border-top: 1px solid #eee;" v-show="($route.name == 'customer')">
			<b-nav pills align="center" class="fullwidth">
				<b-nav-item class="button-item-s" :to="{'name': 'model'}">Home</b-nav-item>
				<b-nav-item class="button-item-s">AR</b-nav-item>
				<b-nav-item class="button-item-s">Notes</b-nav-item>
				<b-nav-item class="button-item-s">Cart</b-nav-item>
				<b-nav-item class="button-item-s">Account</b-nav-item>
			</b-nav>
		</b-navbar>
	</div>

	</div>
</template>

<script>
export default {
	name: 'App',
	mounted () {
		console.log(this.$route)
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
