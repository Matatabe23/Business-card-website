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
	color: #87ff17;
	font-size: 150%;
	border: 3px solid #87ff17;
	border-radius: 100px;
	padding: 3vh 3.7vh;
	cursor: pointer;
	transition: 0.5s ease;
}
.MainIcon:hover{
	background-color: #87ff17;
	color: black;
}
</style>