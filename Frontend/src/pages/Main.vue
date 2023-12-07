<template>
  <main>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center align-items-center">
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
a {
  text-decoration: none;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
	min-width: 250px;
}

.Main-title {
  font-size: 4vh;
  font-weight: 700;
  margin-top: 10px;
  color: var(--main-color);
  text-shadow: 0 0 10px var(--main-color-shadow);
}

.down-title {
  font-size: 2vh;
  font-weight: 500;
  margin-top: 10px;
  color: var(--main-color);
  text-shadow: 0 0 10px var(--main-color-shadow);
}

.Main-button {
  display: flex;
  margin: 2vh;
}

.img-fluid {
  height: auto;
	width: auto;
	max-height: 70vh;
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
