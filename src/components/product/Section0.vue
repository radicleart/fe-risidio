<template>
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <div class="mt-5"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="text-center blurb2 text-white">{{content.title1[0].text}}</p>
      </div>
    </div>
  </div>
  <div class="mt-2 d-flex align-items-center flex-column"  :style="halfDims">
    <div class="my-auto">
      <div class="mt-0"><h1 class="text-black">{{content.title2[0].text}}</h1></div>
      <div class="mx-auto my-4 w-75 text-center">
        <p class="mb-4 text-center blurb2 text-black">{{content.description[0].text}}</p>
        <p class="title3">{{content.title3[0].text}}</p>
        <!-- <p class="text-center continue text-info"><i class="text-warning fa-1x fas fa-angle-down"></i></p> -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section0',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '40px 0 0 0',
        height: height / 2 + 'px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.content.banner.url})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': '#121212',
        opacity: 1
      }
    },
    halfDims () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height / 2 + 'px; width: auto;'
    }
  }
}
</script>

<style scoped>
.blurb1 {
  width: 450px;
  font-size: 14px;
}
.blurb2 {
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
}
.title3 {
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
</style>
