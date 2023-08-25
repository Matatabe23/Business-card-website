<template>
	<div class="TopPanel">
		<div class="Main-title">
			<PanelButton @click="goToPage('/')" :class="{ 'active': activeButton === '/' }">Главная</PanelButton>
			<PanelButton @click="goToPage('/Myinfo')" :class="{ 'active': activeButton === '/Myinfo' }"><i class='bx bx-info-circle'></i>Информация</PanelButton>
			<PanelButton @click="goToPage('/Portfolio')" :class="{ 'active': activeButton === '/Portfolio' }"><i class="bx bx-notepad"></i>Портфолио</PanelButton>
			<PanelButton @click="goToPage('/Contact')" :class="{ 'active': activeButton === '/Contact' }"><i class='bx bx-phone'></i>Связаться</PanelButton>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TopPanel',
	data() {
		return {
			activeButton: null
		};
	},
	methods: {
		goToPage(route) {
			this.activeButton = route;
			// Дополнительный код для перенаправления пользователя на выбранную страницу
			this.$router.push(route);
		}
	}
}
</script>


<style scoped>
.TopPanel {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2% 6% 0 6%;
}

.Main-title {
	width: 100%;
	padding: 1% 2% 0 2%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
}

.active {
	color: red; /* Измените этот стиль на ваш выбор */
}
</style>