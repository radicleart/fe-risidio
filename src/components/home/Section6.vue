<template>
<section id="section6" class="bg-secondary">
  <div class="mx-5 d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white">
      <div class="mb-2"><img width="300px" :src="section6.image.url" /></div>
      <div class="my-4"><h1 class="text-white">{{section6.title[0].text}}</h1></div>
      <div class="mb-2"><h2 class="text-white">{{section6.subtitle[0].text}}</h2></div>
      <div class="mb-4 blurb textOnMobile ustify-content-center"><span>{{section6.description[0].text}}</span></div>
      <div class="d-flex justify-content-center">
        <div class="mt-5 mr-4"><button v-scroll-to="{ element: '#contactSection', duration: 2000 }"><span class="call-button-text">{{section6.link1[0].text}}</span></button></div>
        <div class="mt-5"><button class="button1" v-scroll-to="{ element: '#contactSection', duration: 2000 }"><span class="call-button-text">{{section6.link2[0].text}}</span></button></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section4',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section6 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section6[0]
    }
  }
}
</script>

<style scoped>
.more {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
}
button:hover {
  background: white 0% 0% no-repeat padding-box;
}
button:hover .call-button-text {
  color: #5FBDC1;
}
.call-button-text {
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
.button1 {
  width: 141px;
  height: 43px;
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
  opacity: 1;
}
.button1:hover {
  background: white 0% 0% no-repeat padding-box;
}
.button1 .call-button-text {
  color: #5FBDC1;
}
.button1:hover .call-button-text {
  color: #5FBDC1;
}

@media only screen and (max-width:499px) {
  h2 { font-size: 30px; }
  .textOnMobile { flex: 0 0 80%; max-width: 80%; margin: 0 auto; }
}

@media only screen and (max-width:375px) {
  h1 { font-size: 14px; }
  h2 { font-size: 28px; }
  .textOnMobile { flex: 0 0 70%; max-width: 70%; }
}

@media only screen and (max-width:320px) {
  h2 { font-size: 26px; }
  .textOnMobile { flex: 0 0 65%; max-width: 65%; }
}

</style>
