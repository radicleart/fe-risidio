<template>
 <section id="homesection2" class="home-section2">
   <div class="headline">What We Do</div>
   <h2 class="main-heading">Discover Our Projects</h2>
   <vueper-slides  class="no-shadow what-we-do-slider"
   :arrows="false"
   fixed-height="true"
   :dragging-distance="70"
   prevent-y-scroll
   >
    <vueper-slide v-for="(slide, index) of slides" :key="index">
      <template #content>
        <section class = "container">
          <div class="imageContainer">
            <img :src="slide.image.url" alt=""/>
          </div>
          <div class = "textContainer">
            <h3>{{slide.title[0].text}}</h3>
            <p>{{slide.content[0].text}}</p>
            <div>
              <a class="more" v-if="slide.title[0].text === 'Risidio Marketplace'">Coming Soon</a>
              <a class="more" v-else :href="slide.link[0].text">Find Out More</a>
              <a class="all" href="/our-work">See All Projects</a>
            </div>
          </div>
        </section>
      </template>
    </vueper-slide>
  </vueper-slides>
 </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Section2',
  components: {
    VueperSlides,
    VueperSlide
  },
  props: ['viewportDimensions'],
  data () {
    return {
      slide: [
        {
          id: '1',
          text: 'Upload Your Item'
        },
        {
          id: '2',
          text: 'Mint the Bitcoin'
        },
        {
          id: '3',
          text: 'Mint the Bitcoin'
        }
      ]
    }
  },
  computed: {
    slides () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section2
    }
  }
}
</script>

<style scoped>
.headline {
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0px;
}
.main-content >>> p {
  text-align: center;
}
.home-section2 {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 146px;
}
.home-section2 .main-heading{
  font: normal normal 200 36px/44px Montserrat;
  letter-spacing: 0px;
  text-transform: capitalize;
  white-space: normal;
}
.what-we-do-slider {
  width: 100%;
}
.vueperslides {padding: 0 30em;}
.vueperslides__parallax-wrapper, .vueperslides__track {overflow: visible;}
.more {
  margin-right: 35px;
  font: normal normal bold 12px/15px Montserrat;
  color: #63037E;
}
.all {
  font: normal normal bold 12px/15px Montserrat;
  color: #000000;
}
/* button {
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}
button:hover {
  color: #5FBDC1;
} */

.button1 {
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
}
.button1:hover {
  background: white 0% 0% no-repeat padding-box;
}
.container {
  height: 306px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.imageContainer{
  width: 246px;
}
.imageContainer img{
  width: 100%;
}
.textContainer {
  max-width: 250px;
  width: 100%;
  margin-left: 50px;
}
.textContainer h3 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0px;
}
.textContainer p {
  font: normal normal 300 14px/18px Montserrat;
}
.textContainer div{
  margin-top: 40px;
}
.vueperslides--fixed-height {
  height: 500px;
}
.vueperslides >>> .vueperslides__bullets {
  bottom: 10%;
}
@media only screen and (max-width: 2200px) {
  .vueperslides {padding: 0 25em;}
}
@media only screen and (max-width: 1900px) {
  .vueperslides {padding: 0 17em;}
}
@media only screen and (max-width: 1600px) {
  .vueperslides {padding: 0 10em;}
}
@media only screen and (max-width: 1300px) {
  .vueperslides {padding: 0 5em;}
}
@media only screen and (max-width: 1100px) {
  .vueperslides {padding: 0 2em;}
}
@media only screen and (max-width: 930px) {
  .vueperslides {padding: 0;}
  .textContainer {
    margin-left: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .vueperslides {padding: 0 10em;}
  #homesection2 {
    padding: 100px 0 200px;
  }
  .textContainer div{
    margin-top: 20px;
  }
  .vueperslides >>> .container {
    height: auto;
    flex-direction: column;
  }
  .textContainer {
    width: 246px;
    margin-top: 20px;
    margin-left: 0;
    height: auto;
  }
  .vueperslides >>> .vueperslides__bullets {
    bottom: -25%;
  }
  .textContainer div{
    display: flex;
    justify-content: space-between;
  }
  .more {
    margin-right: 0;
  }
  .vueperslides >>> .vueperslides__bullets {
    bottom: -20%;
  }
}
@media only screen and (max-width: 650px) {
  .vueperslides {padding: 0 7em;}
}
@media only screen and (max-width: 550px) {
  .vueperslides {padding: 0 5em;}
}
@media only screen and (max-width: 450px) {
  .home-section2 .main-heading{
    font-size: 28px;
    padding: 0 10px;
    text-align: center;
  }
  .vueperslides >>> .vueperslides__bullets {
    bottom: -16%;
  }
  .imageContainer, .textContainer {
    width: 200px;
  }
  .home-section2{
    gap: 0;
  }
  .vueperslides {padding: 0;}
}
</style>
