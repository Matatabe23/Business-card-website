<template>
	<main>
		<section class="py-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-9">
						<div class="card-body">
							<p class="Main-title">Frontend developer</p>
							<p class="down-title">Привет, меня зовут Георгий. Я Frontend developer</p>
							<div class="Main-button justify-content-center align-items">
								<MainButton @click="$router.push('/Myinfo')"><i class='bx bx-info-circle'></i>Информация</MainButton>
								<MainButton @click="$router.push('/Portfolio')"><i class="bx bx-notepad"></i>Портфолио</MainButton>
								<MainButton @click="$router.push('/Contact')"><i class='bx bx-phone'></i>Связаться</MainButton>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-9">
						<div class="card-body">
								<img style="width: 55vh;" src="@/image/pngwing.com.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
.row{
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.Main-title {
	font-size: 30px;
	font-weight: 700;
	margin-top: 10px;
	color: rgb(137, 205, 240);
	text-shadow: 0 0 10px rgb(23, 251, 255);
}
.down-title {
	font-size: 15px;
	font-weight: 500;
	margin-top: 10px;
	color: rgb(137, 205, 240);
	text-shadow: 0 0 10px rgb(23, 251, 255);
}
.Main-button {
	display: flex;
	margin: 15px;
}
</style>