<template>
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center  ">
      <div class="my-5"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="mb-4 text-center blurb text-white mx-auto w-75" v-html="content.description1[0].text"></p>
        <h4 class="text-center text-white" v-html="content.description2[0].text"></h4>
      </div>
    </div>
  </div>
  <div class="bg-white mt-2 d-flex align-items-center flex-column"  :style="halfDims">
    <div class="my-auto mobile-gap">
      <div class="mt-0 mb-4"><h1 class="text-black" v-html="content.s1title1[0].text"></h1></div>
      <div class="mb-4"><h2 class="text-center" v-html="content.s1title2[0].text"></h2></div>
      <div class="mx-auto my-4 w-100 text-center">
        <p class="mb-4 mx-auto w-50 text-center blurb2 text-black" v-html="content.s1description[0].text"></p>
      </div>
      <div class="mx-auto my-4 w-75 text-center">
        <img width="100%" :src="content.s1image.url" :alt="content.s1image.alt">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'AboutSection0',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
    demoLink () {
      const productId = this.$route.params.productId
      if (productId === 'lsat') {
        return '/lsat-demo'
      } else if (productId === 'loopbomb') {
        return 'https://loopbomb.com'
      } else if (productId === 'nongibles') {
        return 'https://radicle.art'
      } else if (productId === 'dsearch') {
        return 'https://github.com/radicleart/brightblock-search'
      } else if (productId === 'hubber') {
        return 'https://github.com/radicleart/brightblock-gaia'
      } else {
        return '/ownai'
      }
    }
  },
  computed: {
    hasDemoLink () {
      const productId = this.$route.params.productId
      if (productId === 'lsat' || productId === 'loopbomb' || productId === 'nongibles') {
        return true
      }
      return false
    },
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
      return 'min-height: ' + height + 'px; width: auto;'
    }
  }
}
</script>

<style scoped>
h4 {
  font-weight: 500;
  font-size: 17px;
}
.blurb {
  text-align: center;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
</style>
