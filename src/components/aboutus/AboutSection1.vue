<template>
<section class="bg-lighter" v-if="section1" id="about-section-1">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5" :style="halfDims">
      <div class="mb-auto px-5 d-flex align-items-center flex-column">
        <prismic-rich-text class="main-content" :field="section1.content"/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
export default {
  name: 'AboutSection1',
  props: ['viewportDimensions', 'section1'],
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
.main-content {
  max-width: 750px;
}
.main-content >>> h1 {
  margin-bottom: 1.5rem;
}
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
