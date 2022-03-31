<template>
<section id="crs-section-0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center w-75">
      <div class="mb-4 first-half-h1"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="mb-4 text-center blurb text-white mx-auto w-100">
        <span v-html="content.description[0].text"></span>
        </p>
      </div>
      <!--
      <div v-scroll-to="{ element: '#csrsection1', duration: 1000 }" class="icon-down">
        <i class="fas fa-chevron-down"></i>
      </div>
      -->
    </div>
  </div>
  <div class="bg-white d-flex align-items-center flex-column second-half" id="section0-second-half">
    <div class="my-auto">
      <div class="my-5">
        <div class="mt-0 mb-4"><h1 class="text-black">{{content.s1title1[0].text}}</h1></div>
        <div class="mb-4"><h2 class="text-center">{{content.s1title2[0].text}}</h2></div>
        <div class="mx-auto my-4 s1-description">
        <p class="mb-4 text-center">{{content.s1description[0].text}}</p>
        <p class="mb-4 text-center">{{content.s1description[1].text}}</p>
        <p class="mb-4 text-center">{{content.s1description[2].text}}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'CSRSection0',
  props: ['viewportDimensions', 'content'],
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
        'background-image': `url(${this.content.banner.url})`,
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
.s1-description {
  width: 50%;
}
.first-half-h1 {
  margin-top: 4rem;
}
h4 {
  font-weight: 500;
  font-size: 17px;
}
.blurb {
  text-align: center;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0px;
  color: #FFFFFF;
}
.icon-down {
  margin: 25px auto;
}
@media only screen and (max-width:1200px) {
  .s1-description {
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
