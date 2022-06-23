<template>
  <section id="homesection55" class="bg-white">
    <div class="header-title">
      <div class="headline">How We Work</div>
      <div><h2>Creating Your Decentralised Future</h2></div>
    </div>
          <div class="vueSlideContainer galleryContainer">
              <div class="swiper" ref="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(slide, index) of slides" :key="index">
                        <section class="slideContainer">
                            <div class="slideImage">
                              <div class="collectionImageBack">
                                <img
                                :src="slide.image.url"
                                alt=""
                                class="slide"/>
                            </div>
                           <div class="slideText">
                              <div class="title">
                              <h3 class="innovate">{{slide.title[0].text}}</h3>
                            </div>
                              <p class="slide-text-p">{{slide.text[0].text}}</p>
                              <router-link :to="slide.link[0].text" class="text">Find Out More</router-link>
                            </div>
                            </div>
                        </section>
                </div>
                </div>
                <div class="swiper-button-prev">
                  <img src="@/assets/img/arrow-left.png" alt="Left Arrow">
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/img/arrow-right.png" alt="Right Arrow">
                </div>
                <div class="swiper-pagination">
                  <span class="swiper-pagination-bullet swiper-pagination-clickable"></span>
                  <span class="swiper-pagination-bullet swiper-pagination-clickable"></span>
                  <span class="swiper-pagination-bullet swiper-pagination-clickable"></span>
                </div>
              </div>
            </div>
      </section>
</template>

<script>
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper'
import '@/assets/scss/swiper-bundle.css'

export default {
  name: 'Section5.5',
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
  methods: {
    resize () {
      const windowWidth = window.innerWidth
      if (windowWidth < 500) {
        this.touchableSlide = true
      } else {
        this.touchableSlide = false
      }
    }
  },
  created () {
    window.addEventListener('resize', this.resize())
  },
  computed: {
    slides () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section55
    }
  },
  mounted () {
    const swiper = new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Thumbs],
      // Optional parameters
      loop: true,
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 150,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        bulletClass: 'swiper-pagination-bullet',
        bulletElement: 'span',
        clickableClass: 'swiper-pagination-clickable'
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-pagination-clickable .swiper-pagination-bullet {
  padding: 6px !important;
}
.arrow2{
  transform: rotate(180deg);
}
.swiper-button-prev img {
  max-width: 60px;
}
.swiper-button-next img {
  max-width: 60px;
}
.swiper-button-prev {
  left: 30px !important;
  right: auto;
}
.swiper-button-next {
  right: 30px !important;
  left: auto;
}
.swiper-button-next:after {
  content: none;
}
.swiper-button-prev:after {
  content: none;
}
.swiper {
  height: 470px;
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
#homesection55 .header-title .headline {
  text-align: center;
  letter-spacing: 0px;
  font-weight:600;
  font-size: 20px;
}
#homesection55 .header-title h2{
  font-size: 36px;
  font-weight: 200;
  letter-spacing: 0px;
  text-transform: capitalize;
  white-space: normal;
}
.if{
  max-width: 1300px;
  margin: auto;
}
.slideText{
  position: relative;
  margin-top: -30px;
  h3{
    text-align: center;
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
 .title h3{
   font-weight: 600;
   font-size: 20px;
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
  .swiper::v-deep .title {
    margin-left: 147px;
  }
  .swiper::v-deep .slide-text-p {
    margin-left: 320px;
  }
  .swiper::v-deep .text {
    margin-left: 158px;
  }
}
@media only screen and (max-width: 767px){
  .swiper::v-deep .slideImage {
    display: flex;
    flex-direction: column;
  }
  .slideContainer .slideText {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swiper::v-deep .collectionImageBack {
    display: block;
  }
  .swiper::v-deep h3 {
    line-height: 1;
  }
  .swiper::v-deep .title, .swiper::v-deep .innovate, .swiper::v-deep .slideText {
    margin: 0;
  }
  .swiper::v-deep p.slide-text-p, .swiper::v-deep .text {
    margin-left: 0;
    margin-right: 0;
    max-width: 260px;
    text-align: center;
  }
  .swiper::v-deep .title {
    margin-top: 25px;
  }
  .swiper::v-deep {
    bottom: -8%;
  }
  .swiper {
  height: 680px;
  }
}
@media only screen and (max-width: 500px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
  .swiper::v-deep p.slide-text-p, .swiper::v-deep .text, .swiper::v-deep .slideImage, .swiper::v-deep .slideImage img {
    width: 80%;
  }
  .swiper::v-deep {
    bottom: -10%;
  }
}
@media only screen and (max-width: 470px) {
  .slideContainer .slideText {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 370px) {
  .swiper::v-deep {
    bottom: -7%;
  }
  .swiper::v-deep p.slide-text-p, .swiper::v-deep .text, .swiper::v-deep .slideImage, .swiper::v-deep .slideImage img {
    width: 100%;
  }
}
</style>
