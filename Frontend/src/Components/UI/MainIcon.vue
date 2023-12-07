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
	color: var(--main-color);
	font-size: 150%;
	border: 3px solid var(--main-color);
	border-radius: 100px;
	padding: 3vh 3.7vh;
	cursor: pointer;
	transition: 0.5s ease;
}
.MainIcon:hover{
	background-color: var(--main-color);
	color: black;
}
</style>