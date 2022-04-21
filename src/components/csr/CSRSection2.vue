<template>
  <section class="bg-white">
    <div class="header-title">
      <div>
        <h1 >Our Values</h1>
      </div>
      <div>
        <h2 >For A Better Future</h2>
      </div>
    </div>
            <div class="vueSlideContainer galleryContainer">
              <vueper-slides
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
                <vueper-slide v-for="(slide, index) of content.section2" :key="index">
                    <template #content>
                        <div class="slideContainer">
                            <div class="slideImage">
                              <div class="collectionImageBack">
                                <img :src="slide.image.url" alt="slide" class="slide"/>
                              </div>
                              <prismic-rich-text class="slide-text-p" :field="slide.content"/>
                              <!-- <p class="slide-text-p">{{slide.content[0].text}}</p> -->
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
  name: 'CSRSection2',
  props: ['viewportDimensions', 'content'],

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
      margin-top: 40px;
      }
.if{
  max-width: 1300px;
  margin: auto;
}
.slide-text-p{
    font: normal normal 300 14px/18px Montserrat;
    max-width: 205px;
    margin-left: 50px;
}
.slide-text-p::v-deep a {
  color: #E9493D;
}
.slideText a{
  margin-left: 190px;
  font-size: 12px;
}
.text{
  color: #F9B807;
}
.title{
   margin-left: 300px;
   margin-top: -200px;
}
 .title h2{
   font-weight: 600;
   font-size: 20px;
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
  justify-content: center;
  height:100%;
  padding: 25px 20px;
  margin-top: 20px;
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
  display: flex;
  align-items: center;
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
@media only screen and (max-width: 767px){
  .collectionImageBack img{
    width: 200px;
    height: auto;
  }
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
  .vueperslides::v-deep .title, .vueperslides::v-deep .innovate, .vueperslides::v-deep .slideText {
    margin: 0;
  }
  .vueperslides::v-deep .slide-text-p, .vueperslides::v-deep .text {
    margin: 25px 0 0;
    margin-left: 0;
    max-width: 200px;
  }
  .vueperslides::v-deep .title {
    margin-top: 10px;
  }
  .vueperslides::v-deep .vueperslides__bullets {
    bottom: 13%;
  }
}
@media only screen and (max-width: 500px) {
  .arrow1{
    display: none;
  }
  .arrow2{
    display: none;
  }
}
// @media only screen and (max-width: 389px) {
//   .vueperslides::v-deep p.slide-text-p, .vueperslides::v-deep .text, .vueperslides::v-deep .slideImage, .vueperslides::v-deep .slideImage img {
//     width: 100%;
//   }
// }
</style>
