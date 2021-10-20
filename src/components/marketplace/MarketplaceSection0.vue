<template>
<section id="section0" v-if="section0.banner" :style="bannerImage" class="d-flex justify-content-center flex-column text-white">
  <div class="container my-auto pb-5 text-center">
    <prismic-rich-text class="main-content mt-5 mb-4" :field="section0.content"/>
    <div><a href="https://ruma.risidio.com"><button class="">{{section0.button[0].text}}</button></a></div>
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
    }
  },
  methods: {
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '70px 0 0 0',
        'min-height': (height * 0.8) + 'px',
        height: '100%',
        width: '100%',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.section0.banner.url})`,
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
button {
  background: #5FBDC1;
  border-radius: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}
button:hover {
  color: #5FBDC1;
}
</style>
