<template>
<div class="home">
  <div class='root'>
    <img class='background' ref='background' src='@/assets/Whale1.png'/>
    <img class='foreground' ref='foreground' src='@/assets/logo.png'/>
  </div>

  <div class="d-flex justify-content-center" v-if="content">
    <parallax :speed-factor="0.3">
      <img width="100%" :src="content.data.banner.url" alt="very cool bg">
    </parallax>
    <h1>{{content.data.page_title[0].text}}</h1>
    <prismic-items :prismicItems="content.data"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import PrismicItems from '@/components/PrismicItems'
import Parallax from 'vue-parallaxy'

export default {
  name: 'Home',
  data () {
    return {
      pageId: null
    }
  },
  components: {
    PrismicItems,
    Parallax
  },
  watch: {
    '$route' () {
      this.pageId = this.$route.params.pageId
    }
  },
  mounted () {
    this.pageId = this.$route.params.pageId
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getPage'](this.pageId)
      return content
    }
  }
}
</script>
<style scoped>
</style>
