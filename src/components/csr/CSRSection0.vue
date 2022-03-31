<template>
<section id="crs-section-0" v-if="section0.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center w-75">
      <div class="mb-4 first-half-h1"><h1 class="text-white">{{section0.title[0].text}}</h1></div>
      <div class="">
        <p class="mb-4 text-center blurb text-white mx-auto w-100">
        <span v-html="section0.subtitle[0].text"></span>
        </p>
      </div>
    </div>
  </div>
  <div class="bg-white d-flex align-items-center flex-column second-half" id="section0-second-half">
    <prismic-rich-text class="main-content my-5" :field="section0.content"/>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'CSRSection0',
  props: ['viewportDimensions', 'section0'],
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
    }
  }
}
</script>

<style scoped>
.main-content {
  text-align: center;
}
.main-content >>> h1, .main-content >>> h2 {
  margin-bottom: 1.5rem;
}
.main-content >>> p {
  /* width: 50%; */
  margin: 0 auto 1.5rem;
  text-align: center;
}
.first-half-h1 {
  margin-top: 4rem;
}
.blurb {
  text-align: center;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0px;
  color: #FFFFFF;
}
@media only screen and (max-width:1200px) {
  .main-content >>> p {
    width: 75%;
  }
}
@media only screen and (max-width:768px) {
  .second-half h2 {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
