<template>
<section id="section0" v-if="content.banner" :style="viewportDimensions" class="text-white">
  <div :style="bannerImage" class="d-flex justify-content-center flex-column">
    <div class="my-auto text-center">
      <div class="container">
        <h1 class="mt-5">{{content.title[0].text}}</h1>
        <h2 class="">{{content.title1[0].text}}</h2>
        <prismic-rich-text class="main-content my-4" :field="content.description"/>
      </div>
    </div>
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
        height: (height) + 'px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.content.banner.url})`,
        'background-position': 'center',
        'background-size': 'cover',
        'background-color': '#121212',
        opacity: 1
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
</style>
