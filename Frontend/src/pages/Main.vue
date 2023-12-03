<template>
	<main>
		<section class="py-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-9">
						<div class="card-body">
							<p class="Main-title">Frontend developer</p>
							<p class="down-title">Привет, меня зовут Qugor. Я Frontend developer</p>
							<div class="Main-button justify-content-center align-items">
								<div class="row">
									<div class="col-lg-5 col-md-6">
										<MainButton @click="$router.push('/Myinfo')"><i class='bx bx-info-circle'></i>Информация</MainButton>
									</div>
									<div class="col-lg-5 col-md-6">
										<MainButton @click="$router.push('/Portfolio')"><i class="bx bx-notepad"></i>Проекты</MainButton>
									</div>
									<div class="col-lg-5 col-md-6">
										<MainButton @click="$router.push('/Contact')"><i class='bx bx-phone'></i>Связаться</MainButton>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-9">
						<div class="card-body">
								<img class="img-fluid" src='@/assets/image/Main/Remove-bg.ai_1701617033751.png' alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.Main-title {
	font-size: 3vh;
	font-weight: 700;
	margin-top: 10px;
	color: #87ff17;
	text-shadow: 0 0 10px #87ff17;
}

.down-title {
	font-size: 1.5vh;
	font-weight: 500;
	margin-top: 10px;
	color: #87ff17;
	text-shadow: 0 0 10px #87ff17;
}

.Main-button {
	display: flex;
	margin: 2vh;
	font-size: 1.5vh;
}

.img-fluid {
	height: 80vh;
	animation-name: StartPhoto;
	animation-duration: 0.5s;
}

@media (max-width: 992px) {
	.img-fluid {
		height: auto;
		max-height: 60vh;
	}
}

@keyframes StartPhoto {
	from {
		opacity: 0
	}

	to {
		opacity: 1
	}
}
</style>
