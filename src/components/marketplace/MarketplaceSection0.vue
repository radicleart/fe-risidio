<template>
<section id="section0" v-if="content.banner" :style="bannerImage" class="d-flex justify-content-center flex-column text-white">
  <div class="container my-auto pb-5 text-center">
    <h1 class="mt-5">{{content.title[0].text}}</h1>
    <h2 class="">{{content.title1[0].text}}</h2>
    <prismic-rich-text class="main-content my-4" :field="content.description"/>
    <div><a href="https://ruma.risidio.com"><button class="">Try now!</button></a></div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'MarketplaceSection0',
  props: ['viewportDimensions', 'content'],
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
        'background-image': `url(${this.content.banner.url})`,
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
button {
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
}
</style>
