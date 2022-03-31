<template>
  <section id="section25">
    <div class="container" :style="viewportDimensions">
        <div class="main-text">
          <span>“</span>
          <p>We cannot solve our problems with the same thinking we used when we created them.</p>
          <strong>Albert Einstein</strong>
        </div>
        <div>
          <button>More About Us</button>
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
  padding: 113px;
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
  width: 436px;
  height: 178px;
}
.main-text strong {
  color: #FFFFFF;
}
.container button {
  font: normal normal bold 11px/14px Montserrat;
}
</style>
