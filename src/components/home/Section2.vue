<template>
  <!-- <section id="section2" class="section2 text-white d-flex flex-column justify-content-center"
  :style="bannerImage" style="min-height: 80vh">
    <b-container class="text-center pt-5" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <prismic-rich-text class="main-content" :field="section2.content"/>
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center py-5"> -->
      <!-- <div><a href="https://ruma.risidio.com"><button class="mr-4">Try now!</button></a></div> -->
      <!-- <div><a href="/marketplace"><button class="button1">Find out more</button></a></div>
    </div>
  </section> -->
 <section id="section2" class="home-section2">
   <strong>What We do</strong>
   <span>Discover Our Projects</span>
   <vueper-slides class="no-shadow home-slider" :arrows="false" fixed-height="true" >
    <vueper-slide
      v-for="(slide) in slide"
      :key="slide.id"
      :title="slide.title">
      <template #content>
        <div v-if="slide.id==1" class = "container">
          <div class="imageContainer">
            <img src="../../assets/img/risidio-marketplace.svg"/>
          </div>
          <div class = "textContainer">
            <h5>Risidio Marketplace</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
            <div>
              <a>Find Out More</a>
              <a>See All Projects</a>
            </div>
          </div>
        </div>
        <div v-if="slide.id==2" class = "container">
          <div class="imageContainer ">
            <img src="../../assets/img/indige-image.png"/>
          </div>
          <div class = "textContainer">
            <h4></h4>
            <p></p>
            <div>
              <a></a>
              <a></a>
            </div>
          </div>
        </div>
        <div v-if="slide.id==3" class = "container">
          <div class="imageContainer ">
            <img src="../../assets/img/indige-image.png"/>
          </div>
          <div class = "textContainer">
            <h4></h4>
            <p></p>
            <div>
              <a></a>
              <a></a>
            </div>
          </div>
        </div>
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
    ],
    }
  },
  computed: {
    section2 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section2[0]
    },
    bannerImage () {
      return {
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.section2.banner.url})`,
        'background-position': 'center',
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style scoped>
.main-content >>> h4 {
  margin-bottom: 30px;
}
.main-content >>> p {
  text-align: center;
}
.home-section2{
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 146px;
}
.home-section2 span{
  font: normal normal 200 36px/44px Montserrat;
}
.home-slider {
  width: 100%;
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
  margin-top: 30px;
}
.imageContainer{
  height: 100%;
  width: 246px;
}
.imageContainer img{
  width: 100%;
}
.textContainer {
  width: 258px;
  height: 267px;
  margin-left: 120px;
}
.textContainer div{
  display: flex;
  justify-content: space-between;
}
.vueperslides--fixed-height {
  height: 500px;
}

</style>
