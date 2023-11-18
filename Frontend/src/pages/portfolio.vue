<template>
	<div class="portfolio">
		<Swiper :navigation="true" :modules="modules" class="mySwiper">
			<swiper-slide v-for="contentPortfolio in dataPortfolio">
				<h2>{{ contentPortfolio.name }}</h2>
				<video :src="contentPortfolio.videoSrc" controls controlsList="nodownload" disablePictureInPicture></video>
				<h4 style="margin: 0 20%;"><i>Описание: </i> {{ contentPortfolio.description }}</h4>
				<h4><i>Коммерческий проект: </i> {{ contentPortfolio.commercial }}</h4>
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
			dataPortfolio:[
				{id: 1, name: 'Сайт для моноблока в музее', videoSrc: require("@/assets/video/portfolio/ART.mp4"), description: 'Данный сайт разрабатывался как источник информации в музее для моноблока.', commercial: true, OpenCode: false, tehnologes: 'Vue, Swiper'},
				{id: 2, name: 'Сайт портфолио', videoSrc: require("@/assets/video/portfolio/wefwef.mp4"), description: 'Сайт на котором вы сейчас находитесь', commercial: false, OpenCode: false, tehnologes: 'Vue, Swiper, axios, bootstrap'},
				{id: 3, name: 'Сайт для гильдии', videoSrc: require("@/assets/video/portfolio/wefwef.mp4"), description: 'Сайт создовался для гильдии в игре под название Archeage. Гильдия имела более 400 человек и нужен был способ манипуляции информацией', commercial: true, OpenCode: false, tehnologes: 'Vue, node.js, express, axios, bootstrap, postgreSQL'},
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
	height: 93vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}


.swiper-slide {
	margin-top: 1%;
	color: #87ff17;
	text-align: center;
	font-size: 18px;

	/* Center slide text vertically */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.swiper-slide video {
	max-height: 50%;
	max-width: 50%;
	border: 2px solid #87ff17;
	border-radius: 15px;
}
.swiper-slide h4{
	margin-top: 1%;
}
.swiper-slide i{
	color: red;
}
</style>