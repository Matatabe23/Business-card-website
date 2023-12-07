<template>
	<div class="portfolio">
			<Swiper :navigation="true" :modules="modules" class="mySwiper">
				<swiper-slide v-for="contentPortfolio in dataPortfolio">
					<h2>{{ contentPortfolio.name }}</h2>
					<video :src="contentPortfolio.videoSrc" controls controlsList="nodownload" disablePictureInPicture></video>
					<h4 style="margin: 0 20%;"><i>Описание: </i> {{ contentPortfolio.description }}</h4>
					<h4><i>Коммерческий проект: </i> {{ contentPortfolio.commercial }}</h4>
					<h4><i>Технологии и библиотеки:</i> {{ contentPortfolio.tehnologes }}</h4>
				</swiper-slide>
			</Swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

export default {
	data() {
		return {
			dataPortfolio: [
				{ id: 1, name: 'Аниме бот', videoSrc: require("@/assets/video/portfolio/ArtsBot.mp4"), description: 'Бот генерирующий аниме картинки. Может принимать оплату с помощью Юкассы. ', commercial: true, tehnologes: 'node.js, express, sequelize, node-telegram-bot-api, sqlite3, axios' },
				{ id: 2, name: 'Сайт для моноблока в музее', videoSrc: require("@/assets/video/portfolio/ART.mp4"), description: 'Данный сайт разрабатывался как источник информации в музее для моноблока.', commercial: true, tehnologes: 'Vue, Swiper' },
			]
		}
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Navigation],
		};
	},
}
</script>

<style scoped>
.portfolio {
	height: 90vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 300px;
}


.swiper-slide {
	margin-top: 1%;
	color: var(--main-color);
	text-align: center;
	font-size: 18px;

	/* Center slide text vertically */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.swiper-slide video {
	height: 40%;
	width: 40%;
	border: 2px solid var(--main-color);
	border-radius: 15px;
	margin-bottom: 2%;

}

.swiper-slide h2 {
	margin-top: 1%;
	font-size: 120%;
}

.swiper-slide h4 {
	margin-top: 1%;
	font-size: 100%;
}

.swiper-slide i {
	color: red;
}

@media (max-width: 768px) {
	.swiper-slide video {
		height: auto;
		width: 70vw;
		min-height: 30vw;
		min-width: 40vw;
	}
}
</style>