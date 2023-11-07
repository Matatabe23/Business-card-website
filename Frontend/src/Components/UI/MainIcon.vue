<template>
	<div class="MainIcon">
		<slot></slot>
	</div>
</template>

<script>
export default{
	name: 'MainIcon'
}
</script>

<style scoped>
.MainIcon{
	color: rgb(137, 205, 240);
	font-size: 3vh;
	border: 3px solid rgb(137, 205, 240);
	border-radius: 100px;
	padding: 3vh 3.7vh;
	cursor: pointer;
	transition: 0.5s ease;
}
.MainIcon:hover{
	background-color: rgb(23, 251, 255);
	color: black;
}
</style>