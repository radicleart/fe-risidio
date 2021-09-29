<template>
<section :style="viewportDimensions">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <div class="ml-0"><img :height="iwordHeight" :src="iwords.ione.light" alt="innovate"/></div>
          <div class="ml-5"><img :height="iwordHeight" class="ml-5" :src="iwords.itwo.light" alt="involve"/></div>
          <div class="ml-4"><img :height="iwordHeight" :src="iwords.ithree.light" alt="inspire"/></div>
        </div>
      </div>
    </div>
  </div>
  <div class="vertical-line"></div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section0',
  props: ['viewportDimensions'],
  data () {
    return {
      intro1: require('@/assets/img/Feynman.svg'),
      intro2: 'https://prismic-io.s3.amazonaws.com/risidio-journal/60b4d16b-c4f4-463e-9d4f-34baa93e2afa_intro-hi-res.mp4',
      iwords: {
        ione: {
          light: require('@/assets/img/xd/innovate2.png'),
          dark: require('@/assets/img/xd/innovate1.png')
        },
        itwo: {
          light: require('@/assets/img/xd/involve2.png'),
          dark: require('@/assets/img/xd/involve1.png')
        },
        ithree: {
          light: require('@/assets/img/xd/inspire2.png'),
          dark: require('@/assets/img/xd/inspire1.png')
        }
      }
    }
  },
  methods: {
    hoverOver: function (img, ev) {
      ev.currentTarget.src = img.light
    },
    hoverOut: function (img, ev) {
      ev.currentTarget.src = img.dark
    }
  },
  computed: {
    section () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    },
    iwordHeight () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return height * (110 / 769) + 'px'
    }
  }
}
</script>

<style scoped>
/*
img {
  width: 100%;
  height: auto;
}
*/

.vertical-line {
  border-left: 0.5px solid rgba(255, 255, 255, 0.5);
  height: 190px;
  width: 0;
  margin: -7rem auto 0;
}

.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
}

@media only screen
  and (min-device-width: 1024px)
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .vertical-line { margin: -18rem auto 0; height: 300px; }
  }

@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1)
  and (orientation: portrait) {
    .vertical-line { margin: -18rem auto 0; height: 300px; }
  }

@media only screen and (max-width: 768px) {
  img { height: 90px; }
}

@media only screen and (max-width: 575px) {
  img { height: 70px; }
  .vertical-line { margin: -10rem auto 0; }
}

@media only screen and (max-width: 375px) {
  .vertical-line { margin: -8rem auto 0; }
  .tagline { font-size: 12px; }
}

@media only screen and (max-width: 320px) {
  img { height: 60px; }
  .vertical-line { margin: -7rem auto 0; }
  .tagline { font-size: 12px; }

}
</style>
