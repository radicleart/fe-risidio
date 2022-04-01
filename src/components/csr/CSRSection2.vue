<template>
  <section class="bg-white">
    <div class="header-title">
      <div>
        <h1 >Our Values</h1>
      </div>
      <div>
        <h2 >For A Better Furture</h2>
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
              :gap="3"
              bullets-outside
              :visible-slides="1"
              >
                <template v-if="showArrow == true" #arrow-left>
                  <img src="../../assets/img/arrow.png" alt="placeholder" class="arrow1"/>
                </template>
                <template v-if="showArrow == true" #arrow-right>
                  <img src="../../assets/img/arrow.png" alt="placeholder" class="arrow2"/>
                </template>
                <vueper-slide
                v-for="(slide) in slide"
                :key="slide.id"
                >
                    <template #content>
                        <div v-if="slide.id==1" class = "slideContainer">
                            <div class="slideImage">
                              <h2 class="mobileHeader">Ouality Education</h2>
                              <div class="collectionImageBack">
                                <img
                                src="../../assets/img/slide1.png"
                                alt="slide"
                                class="slide"/>
                            </div>
                           <div class="slideText">
                              <div class="title">
                              <h2 class="notmobileHeader">Ouality Education</h2>
                            </div>
                              <p class="slide-text-p"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                              <a class="text">Find Out More</a>
                            </div>
                            </div>
                        </div>
                          <div v-if="slide.id == 2" class = "slideContainer">
                            <div class="slideImage">
                            <h2 class="mobileHeader">Gender Eqality</h2>
                              <div class="collectionImageBack">
                                <img
                                src="../../assets/img/slide2.png"
                                alt="slide"
                                class="slide"/>
                            </div>
                            <div class="slideText">
                              <div class="title">
                              <h2 class="notmobileHeader">Gender Equality</h2>
                            </div>
                              <p class="slide-text-p"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                              <a class="text">Find Out More</a>
                            </div>
                            </div>
                        </div>
                        <div v-if="slide.id == 3" class = "slideContainer">
                            <div class="slideImage">
                            <h2 class="mobileHeader">Our Values</h2>
                             <div class="collectionImageBack">
                                <img
                                src="../../assets/img/slide1.png"
                                alt="slide"
                                class="slide"/>
                            </div>
                            <div class="slideText">
                              <div class="title">
                              <h2 class="notmobileHeader">Ouality Education</h2>
                            </div>
                              <p class="slide-text-p"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
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
@media only screen and (max-width:1120px) {

  .vueperslides--fixed-height {
    height: 50rem;
    // max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    backdrop-filter: blur(2rem);
  }
  .slideContainer{
    text-align: center;
    gap: 50px;
  }
  .bannerContainer{
    min-height: 62rem;
  }
  .banner{
    min-height: 70rem;
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
@media only screen and (max-width: 720px){
  .vueperslides--fixed-height {
    max-width: 800px;
  }
  .arrow1{
    margin-left: 100px;
  }
  .arrow2{
    margin-right: 100px;
  }
}
@media only screen and (max-width: 550px) {
  .slide-text-p{
    margin-top: -80px;
  }
  .mobileHeader{
    display: block;
    margin-bottom: 35px;
  }
  .notMobileHeader{
    display:block;
    max-width: 50%;
  }
  .vueperslides--fixed-height {
    height: 60rem;
    // max-width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    backdrop-filter: blur(2rem);
  }
  .collectionImage{
    width: 150px;
    height: 150px;
  }
}
</style>
