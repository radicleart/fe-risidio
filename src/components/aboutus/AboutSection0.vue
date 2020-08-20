<template>
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center w-75">
      <div class="mb-4 first-half-h1"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="mb-4 text-center blurb text-white mx-auto w-100">
        <span v-html="content.description1[0].text"></span><br><span v-html="content.description1_5[0].text"></span>
        </p>
        <h4 class="text-center text-white" v-html="content.description2[0].text"></h4>
      </div>
      <div v-scroll-to="{ element: '#section0-second-half', duration: 1000 }" class="icon-down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
  <div class="bg-white d-flex align-items-center flex-column second-half" id="section0-second-half"  :style="halfDims">
    <div class="my-auto">
      <div class="my-5">
        <div class="mt-0 mb-4"><h1 class="text-black" v-html="content.s1title1[0].text"></h1></div>
        <div class="mb-4"><h2 class="text-center" v-html="content.s1title2[0].text"></h2></div>
        <div class="mx-auto my-4 w-100 text-center">
          <p class="mb-4 mx-auto text-center blurb2 text-black" v-html="content.s1description[0].text"></p>
        </div>
      </div>
    </div>
    <div class="w-75 text-center section0-image-container">
        <img width="100%" :src="content.s1image.url" :alt="content.s1image.alt">
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
    hasDemoLink () {
      const productId = this.$route.params.productId
      if (productId === 'r-pay' || productId === 'r-stack' || productId === 'loopbomb' || productId === 'nongibles') {
        return true
      }
      return false
    },
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '40px 0 0 0',
        'min-height': height / 2 + 89 + 'px',
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
.second-half p {
  width: 50%;
}
.first-half-h1 {
  margin-top: 4rem;
}
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
}
.icon-down {
  margin: 25px auto;
}
.section0-image-container {
  margin: 0 auto -10rem;
}
@media only screen and (max-width: 900px) {
  .section0-image-container {
    margin: 0 auto -7rem;
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
  .second-half p {
    width: 75%;
  }
  .second-half h2 {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
