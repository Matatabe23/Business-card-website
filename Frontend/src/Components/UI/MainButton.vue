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
	padding: 2vh 4vh;
	color: #87ff17;
	border: 0.3vh solid #87ff17;
	box-shadow: 0 0 10px #87ff17;
	border-radius: 3vh;
	cursor: pointer;
	transition: background-color 0.5s, color 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.Main-button:hover{
	background-color: #87ff17;
  color: black;
}
</style>