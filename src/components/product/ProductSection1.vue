<template>
<section class="bg-lighter" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column mobile-gap">
    <div class="container m-5 px-5">
      <div class="row">
        <div class="mb-5 col-md-6 col-sm-12">
          <img width="100%" :src="content.section1_image.url" :alt="content.section1_image.alt"/>
        </div>
        <div class="col-md-6 col-sm-12">
          <h1 class="text-left">{{content.section1_title[0].text}}</h1>
          <div class="my-5" v-for="(item, index) of content.section1" :key="index">
            <h2 class="" v-html="item.tile[0].text"></h2>
            <p class="" v-html="item.description1[0].text"></p>
          </div>
          <p v-if="hasDemoLink" class="text-center"><button class="more-text bg-info"><a :href="demoLink()" class="text-white">{{demoText()}}</a></button></p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ProductSection1',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
    demoText () {
      const productId = this.$route.params.productId
      if (productId === 'dsearch' || productId === 'hubber') {
        return 'Find Us On Github'
      } else {
        return 'Try The Demo'
      }
    },
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
    hasDemoLink () {
      const productId = this.$route.params.productId
      if (productId === 'lsat' || productId === 'loopbomb' || productId === 'nongibles' || productId === 'dsearch') {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
</style>
