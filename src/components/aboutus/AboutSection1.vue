<template>
<section class="bg-lighter" v-if="content" id="about-section-1">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5" :style="halfDims">
      <div class="my-auto text-center">
        <div class="mb-auto px-5 d-flex align-items-center flex-column">
          <h1 class="mb-4">{{content.s2title1[0].text}}</h1>
          <!-- <h2 class="mb-4">{{content.s2title2[0].text}}</h2> -->
          <prismic-rich-text class="main-content" :field="content.s2description"/>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
export default {
  name: 'AboutSection1',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    halfDims () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height / 2 + 'px; width: auto;'
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
.main-content >>> p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 0px;
  color: #000000;
}
.bg-lighter {
  background-color: '#F5F5F5';
}
.blurb2 {
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
}
#about-section-1 {
  padding-top: 10rem;
}
@media only screen and (max-width: 900px) {
  #about-section-1 {
    padding-top: 7rem;
  }
}
@media only screen and (max-width: 600px) {
  #about-section-1 {
    padding-top: 5rem;
  }
}
@media only screen and (max-width: 768px) {
  h2 {
    width: 75%;
  }
  p {
    width: 75%;
  }
}
@media only screen and (max-width: 425px) {
  #about-section-1 {
    padding-top: 3rem;
  }
}
</style>
