<template class="MainButton">
<div class="Main-button">
		<slot></slot>
</div>
</template>

<script>
export default{
	name: 'MainButton'
}
</script>

<style scoped>
.Main-button{
	padding: 2vh 6vh;
	color: var(--main-color);
	border: 0.3vh solid var(--main-color);
	box-shadow: 0 0 10px var(--main-color-shadow);
	border-radius: 3vh;
	cursor: pointer;
	transition: background-color 0.5s, color 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.Main-button:hover{
	background-color: var(--main-color);
  color: black;
}
</style>