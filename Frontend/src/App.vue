<template>
	<div class="app" @keydown="myFunction">
		<TopPanel />
		<router-view></router-view>
	</div>
</template>

<script>
export default {

}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-image: url(assets/image/BG.jpg);
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
}
</style>
