<template>
<div v-if="content" class="bg-black" :style="sectionDimensions">
    <section10 :viewportDimensions="sectionDimensions" :content="content"/>
    <section11 :viewportDimensions="sectionDimensions" :content="content" :bgClass="'bg-white'"/>
    <section12 :viewportDimensions="sectionDimensions" :content="content"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Section10 from '@/components/products/Section10'
import Section11 from '@/components/products/Section11'
import Section12 from '@/components/products/Section12'
import Section8 from '@/components/home/Section8'
export default {
  name: 'Products',
  data () {
    return {
      pageId: 'XuH1-xIAAFbNZG9o'
    }
  },
  components: {
    Section10,
    Section11,
    Section12,
    Section8
  },
  watch: {
  },
  methods: {
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getPage'](this.$route.name)
      if (content) {
        console.log('content: ' + content.data.group_set[0].group_item_title[0].text)
        return content.data
      }
      return null
    }
  }
}
</script>
<style scoped>
</style>
