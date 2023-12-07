<template>
	<div class="info">
		<h3>Привет, зови меня Qugor ну или сокращенно 'Q'.</h3>
		<h3>
			Я специализируюсь на frontend разработке, но моя конечная цель - приобрести знания и опыт в fullstack. Я всегда готов взяться за интересные проекты или работу.
		</h3>
		<h3>
			Если речь идет о моей личности, я всегда готов пообщаться и помочь в случае возникновения трудностей.
		</h3>
		<h3 style="text-align: center;">Мои основные ссылки:</h3>
		<div class="Height-icon">
			<a href="https://vk.com/qugor">
				<MainIcon><i class='bx bxl-vk'></i></MainIcon>
			</a>
			<a href="https://github.com/Matatabe23">
				<MainIcon><i class='bx bxl-github'></i></MainIcon>
			</a>
			<a style="text-decoration: none;" href="https://spb.hh.ru/resume/b4d390eaff0bc7d6300039ed1f4230686e3474">
				<MainIcon>hh</MainIcon>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}

}
</script>

<style scoped>
.info{
	min-width: 300px;
}
.info h3 {
	margin: 4% 4% 0 4%;
	color: var(--main-color);
	font-size: 150%;
}

.Height-icon {
	display: flex;
	justify-content: space-evenly;
}

.MainIcon {
	margin-top: 50%;
	margin-bottom: 40%;
}
</style>