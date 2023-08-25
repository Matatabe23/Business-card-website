<template>
	<div class="Main">
		<div class="Main-text">
			<p class="Main-title">Frontend developer</p>
			<p class="down-title">Привет, меня зовут Георгий. Я Frontend developer</p>
			<div class="Main-button">
				<MainButton @click="$router.push('/Myinfo')"><i class='bx bx-info-circle'></i>Информация</MainButton>
				<MainButton @click="$router.push('/Portfolio')"><i class="bx bx-notepad"></i>Портфолио</MainButton>
				<MainButton @click="$router.push('/Contact')"><i class='bx bx-phone'></i>Связаться</MainButton>
			</div>
			<div class="Main-icon">
				<MainIconButton></MainIconButton>
				<MainIconButton></MainIconButton>
				<MainIconButton></MainIconButton>
			</div>
		</div>
		<div class="Main-img">
			<img style="width: 65vh;" src="@/image/pngwing.com.png" alt="">
		</div>
	</div>
</template>

<script>


export default {

}

</script>


<style scoped>
.Main{
	display: flex;
	justify-content: space-around;
}
.Main-text{
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
}
.Main-title{
	font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
	color: rgb(137, 205, 240);
	text-shadow: 0 0 10px rgb(23, 251, 255);
}
.down-title{
	font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
	color: rgb(137, 205, 240);
	text-shadow: 0 0 10px rgb(23, 251, 255);
}
.Main-button{
	display: flex;
	margin: 15px;
}
</style>