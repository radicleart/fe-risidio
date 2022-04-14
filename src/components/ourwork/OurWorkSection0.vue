<template>
<section id="section0" :style="bannerImage" class="d-flex justify-content-center align-items-center flex-column text-white">
  <div class="container my-auto pb-5 text-center">
    <h1 class="mt-5">{{ content.main_title[0].text }}</h1>
    <!-- <p class="para">{{ content.subtitle_0[0].text }}</p>
    <a class="text">{{ content.subtitle_1[0].text }}</a> -->
    <!--<h2 class="">{{content.title1[0].text}}</h2>
    <prismic-rich-text class="main-content my-4" :field="content.description"/>
    <div><a href="https://ruma.risidio.com"><button class="">Try now!</button></a></div>-->
  </div>
  <div v-scroll-to="{ element: '#our-work-section1', duration: 750 }" class="icon-down">
    <i class="fas fa-chevron-down"></i>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'OurWorkSection0',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
      image: 'https://res.cloudinary.com/risidio/image/upload/v1648721676/Risidio.com/bannerimage_imauhu.png'
    }
  },
  methods: {
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '70px 0 0 0',
        'min-height': (height * 0.6) + 'px',
        height: '100%',
        width: '100%',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.image})`,
        'background-position': 'center',
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
h2 {
  margin-bottom: 2rem;
}
.main-content >>> p {
  text-align: center;
}
.para{
  font-size: 26px;
  max-width: 1057px;
  text-align: center;
  color: #FFFFFF;
  opacity: 1;
}
.text{
  width: 957px;
  height: 24px;
  text-align: center;
  font-size: 17px;
  color: #FFFFFF;
  }
</style>
