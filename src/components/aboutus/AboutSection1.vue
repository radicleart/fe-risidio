<template>
<section class="bg-lighter" v-if="content" id="about-section-1">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5" :style="halfDims">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <h1 class="mb-4">{{content.s2title1[0].text}}</h1>
          <!-- <h2 class="mb-4">{{content.s2title2[0].text}}</h2> -->
          <p class="mx-auto" v-html="content.s2description[0].text"></p>
          <p class="mx-auto" v-html="content.s2description[1].text"></p>
          <p class="mx-auto" v-html="content.s2description[2].text"></p>
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
p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 0px;
  color: #000000;
  width: 50%;
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
@media only screen and (max-width: 425px) {
  #about-section-1 {
    padding-top: 3rem;
  }
  h2 {
    width: 75%;
  }
  p {
    width: 75%;
  }
}
</style>
