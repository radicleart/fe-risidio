<template>
<div v-if="content">
    <section0 :viewportDimensions="sectionDimensions" :content="content"/>
    <section1 :viewportDimensions="sectionDimensions" :content="content"/>
    <section2 :viewportDimensions="sectionDimensions" :content="content"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Section0 from '@/components/products/Section0'
import Section1 from '@/components/products/Section1'
import Section2 from '@/components/products/Section2'
import Section8 from '@/components/home/Section8'
export default {
  name: 'Products',
  data () {
    return {
      pageId: 'XuH1-xIAAFbNZG9o'
    }
  },
  components: {
    Section0,
    Section1,
    Section2,
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
      const content = this.$store.getters['contentStore/getPage'](this.pageId)
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
