<template>
<section id="section0" v-if="section0.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center w-75">
      <div class="mb-4 first-half-h1"><h1 class="text-white">{{section0.title[0].text}}</h1></div>
      <div><p class="mb-4 text-center blurb text-white mx-auto w-100">{{section0.tagline[0].text}}</p></div>
    </div>
  </div>
  <div class="bg-white d-flex align-items-center flex-column second-half" id="section0-second-half"  :style="halfDims">
    <div class="my-auto">
      <div class="my-5 second-half-text">
        <prismic-rich-text class="main-content my-4" :field="section0.content"/>
      </div>
    </div>
    <div class="w-75 text-center section0-image-container">
        <img width="100%" :src="section0.image.url" :alt="section0.image.alt">
        <!-- testing -->
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'AboutSection0',
  props: ['viewportDimensions', 'section0'],
  data () {
    return {
    }
  },
  methods: {
    demoLink () {
      const productId = this.$route.params.productId
      if (productId === 'r-pay') {
        return '/rpay-demo'
      } else if (productId === 'loopbomb') {
        return 'https://loopbomb.com'
      } else if (productId === 'nongibles') {
        return 'https://radicle.art'
      } else if (productId === 'dsearch') {
        return 'https://github.com/radicleart/brightblock-search'
      } else if (productId === 'r-stack') {
        return 'https://github.com/radicleart/brightblock-gaia'
      } else {
        return '/ownai'
      }
    }
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '40px 0 0 0',
        'min-height': height / 2 + 89 + 'px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.section0.banner.url})`,
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
.main-content >>> p, .main-content >>> h1, .main-content >>> h4 {
 margin-bottom: 1.5rem;
}
.main-content >>> p {
  max-width: 750px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.first-half-h1 {
  margin-top: 4rem;
}
.main-content >>> h4 {
  font-weight: 500;
  font-size: 17px;
}
.blurb {
  text-align: center;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0px;
  color: #FFFFFF;
}
.section0-image-container {
  margin: 0 auto -10rem;
}
@media only screen and (max-width: 900px) {
  .section0-image-container {
    margin: 0 auto -7rem;
  }
  .blurb {
    font-size: 1.2em;
  }
}
@media only screen and (max-width: 600px) {
  .section0-image-container {
    margin: 0 auto -5rem;
  }
}
@media only screen and (max-width: 425px) {
  .section0-image-container {
    margin: 0 auto -3rem;
  }
}
@media only screen and (max-width:768px) {
  .main-content >>> p {
    width: 75%;
  }
  .main-content >>> h2 {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
