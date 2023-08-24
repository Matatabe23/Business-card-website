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
	padding: 15px;
	color: rgb(137, 205, 240);
	border: 3px solid rgb(23, 251, 255);
	box-shadow: 0 0 10px rgb(23, 251, 255);
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.5s, color 0.5s;
}
.Main-button:hover{
	background-color: rgb(23, 251, 255);
  color: black;
}
</style>