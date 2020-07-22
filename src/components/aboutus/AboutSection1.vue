<template>
<section class="bg-lighter" v-if="content">
  <div class="d-flex justify-content-center mobile-gap">
    <div class="d-flex align-items-center flex-column" :style="halfDims">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <h1 class="mb-4">{{content.s2title1[0].text}}</h1>
          <h1 class="mb-4">{{content.s2title2[0].text}}</h1>
          <p class="mx-auto w-75">{{content.s2description[0].text}}</p>
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
  font-size: 12px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
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
  opacity: 1;
}
</style>
