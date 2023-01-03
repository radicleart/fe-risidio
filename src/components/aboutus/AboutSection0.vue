<template>
<div id="about-section0" v-if="content.section0[0].banner">
  <section :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center w-75">
      <div class="first-half-h2"><h2 class="text-white">{{content.section0[0].title[0].text}}</h2></div>
      <div class="">
        <p class="mb-0 text-center blurb text-white mx-auto w-100">
        <span v-html="content.section0[0].tagline[0].text"></span>
        </p>
        <!-- <h3 class="text-center text-white" v-html="content.section0[0].tagline[0].text"></h3> -->
      </div>
    </div>
    <div v-scroll-to="{ element: '#about-section0-second-half', duration: 750 }" class="icon-down">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
  <section class="bg-white d-flex align-items-center justify-content-center flex-column second-half" id="about-section0-second-half"  :style="halfDims">
      <div class="mt-0 mb-4"><h2 class="text-black">{{content.section0[0].content[0].text}}</h2></div>
      <img :src="content.section0[0].visionmission.url" alt="" class="image"/>
      <div class="my-4"><span class="text-center subheading">{{content.section0[0].content[1].text}}</span></div>
      <p class="my-4 text-center">{{content.section0[0].content[2].text}}</p>
      <img :src="content.section0[0].mission.url" alt="" class="image"/>
      <div class="my-4 mt-2"><span class="text-center subheading">{{content.section0[0].content[3].text}}</span></div>
      <p class="my-4 text-center">{{content.section0[0].content[4].text}}</p>
  </section>
    <!--<div class="w-75 text-center section0-image-container">
        <img width="100%" :src="content.s1image.url" :alt="content.s1image.alt">
    </div>-->
</div>
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
        'background-image': `url(${this.content.section0[0].banner.url})`,
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
.second-half{
  padding-top: 100px;
  padding-bottom: 100px;
}
.second-half p {
  max-width: 750px;
  width: 100%;
  padding: 0 15px;
}
#about-section0 .first-half-h2 {
  margin-top: 4rem;
}
.subheading {
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0px;
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
.image{
  width: 235px;
  height: 198px;
  margin-top:80px
}
.text-center{
  margin-top: 25px;
  }
@media only screen and (max-width: 900px) {
  .section0-image-container {
    margin: 0 auto -7rem;
  }
  .blurb {
    font-size: 1.2em;
  }
  .image{
    margin-left: 300px;
    margin-right: 300px;
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
  .second-half .subheading {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  }
</style>
