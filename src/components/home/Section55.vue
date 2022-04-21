<template>
  <section id="slider" class="bg-white">
    <div class="header-title">
      <div>
        <h1>How We Work</h1>
      </div>
      <div>
        <h2>Creating Your Decentralised Future</h2>
      </div>
    </div>
            <div class="vueSlideContainer galleryContainer">
              <vueper-slides
              ref="slides"
              :infinite="false"
              fixed-height="true"
              class="no-shadow"
              :arrows="showArrow"
              :arrows-outside="showArrow"
              :touchable="touchableSlide"
              :gap="10"
              :visible-slides="1"
              >
                <template v-if="showArrow == true" #arrow-left>
                  <img src="../../assets/img/arrow.png" alt="placeholder" class="arrow1"/>
                </template>
                <template v-if="showArrow == true" #arrow-right>
                  <img src="../../assets/img/arrow.png" alt="placeholder" class="arrow2"/>
                </template>
                <vueper-slide v-for="(slide, index) of slides" :key="index">
                    <template #content>
                        <div class="slideContainer">
                            <div class="slideImage">
                              <div class="collectionImageBack">
                                <img
                                :src="slide.image.url"
                                alt="slide"
                                class="slide"/>
                            </div>
                           <div class="slideText">
                              <div class="title">
                              <h2 class="innovate">{{slide.title[0].text}}</h2>
                            </div>
                              <p class="slide-text-p">{{slide.text[0].text}}</p>
                              <a :href="slide.link[0].text" class="text">Find Out More</a>
                            </div>
                            </div>
                        </div>
                       </template>
                </vueper-slide>
              </vueper-slides>
            </div>
      </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'Section55',
  props: ['viewportDimensions'],

  components: {
    VueperSlides,
    VueperSlide
    // HomeSearchBar
  },
  data: () => ({
    touchableSlide: false,
    showArrow: true,
    slide: [
      {
        id: '1',
        text: 'Collection'
      },
      {
        id: '2',
        text: 'Collection'
      },
      {
        id: '3',
        text: 'Collection'
      }
    ],
    return: {
      resultSet: [],
      loaded: false,
      rand: 1
      // touchableSlide: false
    }
  }),
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  computed: {
    slides () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section55
    }
  },
  mounted () {
    this.$root.$on('particularSlide', (n) => {
      this.$refs.slides.goToSlide(n)
    })
  }
}
</script>

<style lang="scss" scoped>
.arrow2{
  transform: rotate(180deg);
}
.bg-white{
    min-height: 800px;
    padding: 10rem 1rem;
    text-align: center;
}
.header-title{
  text-align: center;
  margin-top: -40px;
  gap: 20px;
}
.header-title h1{
  font-weight:600;
  font-size: 20px;
}
.header-title h2{
  font-weight: 200;
  font-size: 36px;
}
.if{
  max-width: 1300px;
  margin: auto;
}
.slideText{
  position: relative;
  margin-top: -30px;
  h2{
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font: normal normal 300 30px/55px Montserrat;
  }
  .slide-text-p{
    font: normal normal 300 14px/18px Montserrat;
    max-width: 250px;
    margin-left: 350px;
    margin-top: 15px;
  }
}
.slideText a{
  margin-left: 190px;
  font-size: 12px;
}
.text{
  color: #F9B807;
}
.title{
   margin-left: 180px;
   margin-top: -200px;
}
 .title h2{
   font-weight: 600;
   font-size: 20px;
 }
 .vueperslide:first-child .innovate {
     margin-left: 20px;
 }
.vueperslide{
  background-color:rgba(255, 255, 255, 0.637);
  border-radius: 30px;
}

.vueperslides--fixed-height {
  height: 287px;
  max-width: 1135px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  backdrop-filter: blur(2rem);
}
.vueperslides__arrow .arrow1{
  width: 50px;
  height: 50px;
  color: white;
  position: relative;
}
.vueperslides__arrow .arrow2{
  width: 50px;
  height: 50px;
  color: white;
  position: relative;
}
.vueperslides::v-deep .vueperslides__bullets {
  bottom: -35%;
}
.slideContainer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height:100%;
  padding: 25px 20px;
  margin-top: 20px;
}
.slideContainer > *:nth-child(1){
  margin: auto;
}
.slideContainer > *:nth-child(2){
  margin: auto;
}
.collectionImage{
  display: block;
  width: 211px;
  height: 189px;
  border-radius: 10px;
  margin: auto;
  box-shadow: 10px 10px 30px white;
  object-fit: cover;
}
.slideImage{
  position: relative;
}
.collectionImageBack{
  position: relative;
  display: flex;
}
.collectionImageFront{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  transform: scale(1.15)
}
@media only screen and (max-width:1330px) {
  .arrow1{
    margin-left: 100px;
  }
  .arrow2{
    margin-right: 100px;
  }
}
@media only screen and (max-width:1290px) {
    .vueperslides--fixed-height {
      max-width: 85%;
    }
}
.notMobileHeader, .mobileHeader{
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font: normal normal 300 30px/55px Montserrat;
    width: 50%;
}
.mobileHeader {
  display: none;
}
.notMobileHeader{
  display: block;
}
@media only screen and (max-width: 800px){
  .vueperslides::v-deep .title {
    margin-left: 147px;
  }
  .vueperslides::v-deep .slide-text-p {
    margin-left: 320px;
  }
  .vueperslides::v-deep .text {
    margin-left: 158px;
  }
}
@media only screen and (max-width: 767px){
  .vueperslides--fixed-height {
    height: 510px;
  }
  .vueperslides::v-deep .slideImage {
    display: flex;
    flex-direction: column;
  }
  .vueperslides::v-deep .collectionImageBack {
    display: block;
  }
  .vueperslides::v-deep h2 {
    line-height: 1;
  }
  .vueperslide:first-child .innovate {
     margin-left: 0;
  }
  .vueperslides::v-deep .title, .vueperslides::v-deep .innovate, .vueperslides::v-deep .slideText {
    margin: 0;
  }
  .vueperslides::v-deep p.slide-text-p, .vueperslides::v-deep .text {
    margin-left: 0;
    margin-right: 0;
    max-width: 260px;
    text-align: center;
  }
  .vueperslides::v-deep .title {
    margin-top: 25px;
  }
  .vueperslides::v-deep .vueperslides__bullets {
    bottom: -8%;
  }
}
@media only screen and (max-width: 500px) {
  .arrow1{
    display: none;
  }
  .arrow2{
    display: none;
  }
  .vueperslides::v-deep .vueperslides__bullets {
    bottom: -10%;
  }
}
@media only screen and (max-width: 389px) {
  .vueperslides::v-deep p.slide-text-p, .vueperslides::v-deep .text, .vueperslides::v-deep .slideImage, .vueperslides::v-deep .slideImage img {
    width: 100%;
  }
}
@media only screen and (max-width: 350px) {
  .vueperslides::v-deep .vueperslides__bullets {
    bottom: -7%;
  }
}
</style>
