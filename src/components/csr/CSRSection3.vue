<template>
  <section id="csr-section3" class="bg-white">
    <div class="header-title">
      <div><h2>Our Values</h2></div>
      <div class="headline">For A Better Future</div>
    </div>
      <div class="vueSlideContainer galleryContainer">
        <div class="swiper" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slide, index) of content.section2" :key="index">
                <div class="slideContainer">
                  <div class="slideImage">
                    <div class="collectionImageBack">
                      <img :src="slide.image.url" alt="" class="slide"/>
                    </div>
                    <prismic-rich-text class="slide-text-p" :field="slide.content"/>
                  </div>
                </div>
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
  name: 'CSRSection3',
  props: ['viewportDimensions', 'content'],
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
.swiper-pagination-bullet {
  padding: 6px;
}
.swiper {
  height: 390px;
  max-width: 1200px;
}
.swiper-button-prev img {
  max-width: 60px;
}
.swiper-button-next img {
  max-width: 60px;
}
.swiper-pagination-bullet {
  padding: 6px;
}
.swiper-button-next:after {
  content: none;
}
.swiper-button-prev:after {
  content: none;
}
.swiper-button-prev {
  left: 30px !important;
  right: auto;
}
.swiper-button-next {
  right: 30px !important;
  left: auto;
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
#csr-section3 .header-title h2{
  font-weight:600;
  font-size: 20px;
}
#csr-section3 .header-title .headline{
  font-weight: 200;
  font-size: 36px;
  letter-spacing: 0px;
  text-transform: capitalize;
  white-space: normal;
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
.slideImage {
  display: flex;
  align-items: center;
}
.collectionImageBack {
  position: relative;
  display: flex;
}
.collectionImageFront {
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
@media only screen and (max-width: 767px) {
  .collectionImageBack img{
    width: 171px;
    height: auto;
  }
  .slideImage {
    flex-direction: column;
    align-items: center;
  }
  .swiper {
    height: 450px;
  }
  .slide-text-p {
    margin-left: 0;
    margin-top: 30px;
  }
  .slide-text-p p {
    text-align: center;
  }
  .slide-text-p {
    margin: 25px 0 0;
    margin-left: 0;
    max-width: 171px;
  }
}
@media only screen and (max-width: 500px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
}
</style>
