<template>
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="mt-auto mobile-view-1 mobile-gap">
      <div class="mt-5"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="blurb2 text-white">{{content.title1[0].text}}</p>
      </div>
    </div>
  </div>
  <div class="mt-2 d-flex align-items-center flex-column mobile-view-2 mobile-gap"  :style="halfDims">
    <div class="my-auto">
      <div class="mt-0"><h1 class="text-black">{{content.title2[0].text}}</h1></div>
      <div class="mx-auto my-4 mobile-view-2__text">
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
.mobile-view-2__text {
  width: 75%;
}

@media ( max-width: 1024px ) {
  .blurb2 {
    text-align: left;
  }
  h1 {
    text-align: left;
    margin-top: 25px;
    margin-bottom: 12px;
  }
  .title3 {
      text-align: left;
  }
  .mobile-gap {
    max-width: 704px;
    width: 100%;
  }
  .mobile-view-1 {
    margin-bottom: 0;
  }
  .mobile-view-1 p {
    margin-bottom: 25px;
  }
  .mobile-view-2 {
    margin: 0 auto;
    min-height: 0;
  }
  .mobile-view-2__text {
    text-align: left;
    width: 100%;
  }
  .mobile-view-2__text .title3 {
    margin-bottom: 0;
  }
}
</style>
