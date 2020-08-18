<template>
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex justify-content-center flex-column first-half">
    <div class="my-auto text-center">
      <div class="mt-5"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="h2">
        <h2 class="text-white">{{content.title1[0].text}}</h2>
      </div>
      <div v-scroll-to="{ element: '#product-section-1', duration: 1000 }" class="icon-down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div class="mb-4 back">
        <router-link to="./"><span class="text-warning">&#10094;</span> Back to All Products</router-link>
    </div>
  </div>
  <div class="d-flex align-items-center flex-column second-half"  :style="halfDims">
    <div class="my-auto second-half__text-container">
      <div class="mt-0"><h1 class="text-black">{{content.title2[0].text}}</h1></div>
      <div class="mx-auto my-4">
        <p class="mb-4 blurb2 text-black" v-html="content.description[0].text"></p>
        <p class="title3" v-html="content.title3[0].text"></p>
        <!-- <p class="text-center continue text-info"><i class="text-warning fa-1x fas fa-angle-down"></i></p> -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'ProductSection0',
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
        return 'https://stax.risidio.com'
      } else {
        return '/ownai'
      }
    }
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '70px 0 0 0',
        height: (height / 2 + 50) + 'px',
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
      return 'min-height: ' + (height / 2 - 50) + 'px; width: auto;'
    }
  }
}
</script>

<style scoped>
.text-bigger {
  font-size: 1.8rem;
}
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
.icon-down {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid rgba(249, 184, 7, 0.2);
  border-radius: 50%;
  color: #F9B807;
}
.icon-down i {
  position: relative;
  top: 8px;
}
.icon-down:hover {
  cursor: pointer;
}
.first-half h1 {
  margin-bottom: 1rem;
}
.first-half h2 {
  margin-bottom: 2rem;
}
.back {
  width: 75%;
  margin: 0 auto;
}
.back span {
  margin-right: 10px;
}
.back a {
  color: #fff;
  font-size: 10px;
}
.second-half__text-container {
  width: 75%;
}
@media only screen and (max-width:425px) {
  .first-half .h2 {
    width: 85%;
    margin: 0 auto;
  }
  .back {
    width: 85%;
  }
  .second-half {
    margin: 40px 0;
  }
  .second-half p {
    text-align: left;
  }
  .second-half__text-container {
    width: 85%;
  }
}
</style>
