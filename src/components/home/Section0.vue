<template>
<section :style="viewportDimensions">
  <div class="d-flex justify-content-center">
    <div class=" d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <div class="ml-0"><img :height="iwordHeight" :src="iwords.ione.dark" @mouseover="hoverOver(iwords.ione, $event)" @mouseout="hoverOut(iwords.ione, $event)" /></div>
          <div class="ml-5"><img :height="iwordHeight" class="ml-5" :src="iwords.itwo.dark" @mouseover="hoverOver(iwords.itwo, $event)" @mouseout="hoverOut(iwords.itwo, $event)" /></div>
          <div class="ml-4"><img :height="iwordHeight" :src="iwords.ithree.dark" @mouseover="hoverOver(iwords.ithree, $event)" @mouseout="hoverOut(iwords.ithree, $event)" /></div>
        </div>
        <div class="mt-5 tagline">{{section.tagline[0].text}}</div>
      </div>
    </div>
  </div>
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
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  img { height: 90px; }
}

@media only screen and (max-width: 575px) {
  img { height: 70px; }
}

@media only screen and (max-width: 320px) {
  img { height: 60px; }
  .tagline { font-size: 16px; }
}
</style>
