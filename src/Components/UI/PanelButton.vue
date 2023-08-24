<template>
	<div class="PanelButton">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'PanelButton'
}
</script>

<style scoped>
.PanelButton {
	cursor: pointer;
	font-size: 20px;
	transition: 0.5s ease;
}
.PanelButton:hover{
	color: red;
}
</style>