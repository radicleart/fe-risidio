<template>
<section class="bg-dark" v-if="content">
  <div class="bg-dark d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white">
      <div class="w-75 mx-auto">
        <h1>{{content.section3_title[0].text}}</h1>
        <div class="my-5 row">
          <div class="col-6 mt-4" v-for="(item, index) of content.section3_group" :key="index">
            <h2 class="">{{item.s3_title[0].text}}</h2>
            <p class="">{{content.section3_group2[index].description1[0].text}}</p>
          </div>
        </div>
      </div>
      <p v-if="hasDemoLink" class="text-center"><button class="more-text"><a :href="demoLink()" class="text-info">{{demoText()}}</a></button></p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ProductSection3',
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
      if (productId === 'lsat' || productId === 'loopbomb') {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: left;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
</style>
