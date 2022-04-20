<template>
  <section id="section25">
    <div class="container" :style="viewportDimensions">
        <div class="main-text">
          <span>“</span>
          <p>We cannot solve our problems with the same thinking we used when we created them.</p>
          <strong>Albert Einstein</strong>
        </div>
        <div>
          <a class="more-about-us secondary-button" href="/aboutus">More About Us</a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section2.5',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  height: 769px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 113px 15px;
}
.main-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-text span{
  font-size: 168px;
  height: 150px;
  color: #5FBDC1;
}
.main-text p {
  text-align: center;
  font: normal normal 200 36px/44px Montserrat;
  color: #FFFFFF;
  max-width: 436px;
  width: 100%;
}
.main-text strong {
  color: #FFFFFF;
}
.container .more-about-us {
  font: normal normal bold 11px/14px Montserrat;
}
@media only screen and (max-width: 470px) {
  .main-text p { font-size: 30px; }
}
@media only screen and (max-width: 400px) {
  .main-text p { font-size: 26px; }
}
@media only screen and (max-width: 350px) {
  .main-text p { font-size: 22px; }
}
</style>
