<template>
<section id="section0" v-if="section0.banner" :style="bannerImage" class="d-flex justify-content-center flex-column text-white">
  <div class="container my-auto pb-5 text-center">
    <h1 class="mt-5">Our Work</h1>
    <p class="para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
    <a class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</a>
    <!--<h2 class="">{{content.title1[0].text}}</h2>
    <prismic-rich-text class="main-content my-4" :field="content.description"/>
    <div><a href="https://ruma.risidio.com"><button class="">Try now!</button></a></div>-->
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'MarketplaceSection0',
  props: ['viewportDimensions', 'section0'],
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
.main-content >>> h1 {
  margin-bottom: 1rem;
}
.main-content >>> h2 {
  margin-bottom: 2rem;
}
.main-content >>> p {
  text-align: center;
}
.para{
  font-size: 26px;
  width: 1057px;
  height: 68px;
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
