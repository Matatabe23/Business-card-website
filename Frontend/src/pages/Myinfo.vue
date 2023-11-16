<template>
	<div class="info">
		<h3>Привет, зови меня Qugor ну или сокращенно 'Q'. Да, это мой ник, но думаю мое настоящее имя тебе куда интереснее.
			Чорный Георгий, вот такая забавная у меня фамилия. Говоришь: "ошибка в фамилии", но как бы не так)</h3>
		<h3>Я Frontend developer, но мой интерес очень часто не ограничиваеться только frontend технологиями. Я люблю
			fullstack разработку и использую для ее реализации <i><i class='bx bxl-vuejs'></i>Vue 3</i>, <i><i
					class='bx bxl-nodejs'></i>node.js</i> и другие технологии которые относяться к моей разработке, к примеру
			<i><i class='bx bxl-postgresql'></i>PostgreSQL</i>, люблю его использовать в своих проектах, но не люблю его
			настраивать на сервере, крайне неприятная процедура, ну лично для меня.
		</h3>
		<h3>Приоритет я отдаю Frontend, но пришлось учить и backend для того, что бы я мог не только свои хотелки реализовать,
			но и выполнять фриланс заказы.</h3>
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
.info h3 {
	margin: 4% 4% 0 4%;
	color: #87ff17;
	font-size: 3vh;
}

.Height-icon {
	display: flex;
	justify-content: space-evenly;
}

.MainIcon {
	margin-top: 5vh;
	margin-bottom: 4vh;
}</style>