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
      <div><button class="more-text"><a :href="demoLink" class="text-info">{{content.section3_link[0].text}}</a></button></div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section3',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
    demoLink () {
      const productId = this.$route.params.productId
      if (productId === 'lsat') {
        return '/lsat-demo'
      } else if (productId === 'loopbomb') {
        return 'https://loopbomb.com'
      } else {
        return '/hubber'
      }
    }
  },
  computed: {
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
