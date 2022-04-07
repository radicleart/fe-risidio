<template>
 <section id="section2" class="home-section2">
   <strong>What We do</strong>
   <span class="headline">Discover Our Projects</span>
   <vueper-slides  class="no-shadow home-slider"
   :arrows="false"
   fixed-height="true"
   :dragging-distance="70"
   prevent-y-scroll
   :gap="5"
   :breakpoints="breakpoints"
   >
    <vueper-slide v-for="(slide, index) of slides" :key="index">
      <template #content>
        <div class = "container">
          <div class="imageContainer">
            <img :src="slide.image.url"/>
          </div>
          <div class = "textContainer">
            <h5>{{slide.title[0].text}}</h5>
            <p>{{slide.content[0].text}}</p>
            <div>
              <a :href="slide.link[0].text">Find Out More</a>
              <a>See All Projects</a>
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
      breakpoints: {
        900: {
          gap: 15
        },
        700: {
          visibleSlides: 1
        },
        600: {
          gap: 5
        }
      }
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
.home-section2 .headline{
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
.vueperslides >>> .vueperslides__bullets {
  bottom: 10%;
}

@media only screen and (max-width: 930px) {
  .textContainer {
    margin-left: 20px;
  }
  .textContainer a {
    font-size: 12px;
  }
  .textContainer p {
    font-size: 12px;
  }
  .textContainer h5 {
    font-size: 14px;
  }
}
@media only screen and (max-width: 700px) {
  #section2 {
    padding: 100px 0 200px;
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
}
@media only screen and (max-width: 450px) {
  .home-section2 .headline{
    font-size: 28px;
    padding: 0 10px;
    text-align: center;
  }
  .vueperslides >>> .vueperslides__bullets {
    bottom: -15%;
  }
  .imageContainer, .textContainer {
    width: 200px;
  }
}
</style>
