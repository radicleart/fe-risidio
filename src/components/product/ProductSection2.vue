<template>
<section class="bg-black" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto mx-auto gap-on-mobile text-center">
      <h2 class="text-center blurb2 text-white">{{content.section2[0].title4[0].text}}</h2>
      <template v-if="getVideoUrl()">
        <div class="video-container">
          <div class="video-container--responsive">
            <iframe class="video-iframe" :src="getVideoUrl()" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </template>
      <template v-else>
        <img ref="imgel" width="80%" :height="calcHeight()" :src="content.section2[0].image.url" :alt="content.section2[0].image.alt"/>
      </template>
    </div>
  </div>
</section>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ProductSection2',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
    calcHeight () {
      Vue.nextTick(function () {
        const elementId = this.$refs.imgel
        if (elementId) {
          const width = elementId.clientWidth
          return width * (9 / 16) + 'px'
        }
      }, this)
    },
    getVideoUrl () {
      const productId = this.$route.params.productId
      if (productId === 'lsat') {
        return 'https://www.youtube.com/embed/oJCys8ESqEc'
      } else if (productId === 'loopbomb') {
        return 'https://www.youtube.com/embed/ZBHtab-yPqY'
      } else if (productId === 'nongibles') {
        return null
      } else if (productId === 'dsearch') {
        return null
      } else if (productId === 'hubber') {
        return null
      } else {
        return null
      }
    }
  },
  computed: {
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
.card-title {
  white-space: nowrap;
}
.card-text {
  min-height: 100px;
}
.card-img-top {
  height: 300px;
}
h1 {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
h2 {
  margin-bottom: 20px;
}
.video-container {
  max-width: 768px;
  max-height: 432px;
  margin: 0 auto;
}
.video-container--responsive {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.gap-on-mobile {
  width: 75%;
  margin: 0 auto;
}
@media only screen and (max-width:425px) {
  .gap-on-mobile {
    width: 85%;
    margin: 0 auto;
  }
}
</style>
