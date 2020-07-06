<template>
<div v-if="content" class="bg-white">
    <section0 :viewportDimensions="sectionDimensions" :content="content"/>
    <section1 :viewportDimensions="sectionDimensions" :content="content"/>
    <section2 :viewportDimensions="sectionDimensions" :content="content"/>
    <section3 :viewportDimensions="sectionDimensions" :content="content"/>
    <section12 :viewportDimensions="sectionDimensions" :content="contentServices"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Section0 from '@/components/product/Section0'
import Section1 from '@/components/product/Section1'
import Section2 from '@/components/product/Section2'
import Section3 from '@/components/product/Section3'
import Section12 from '@/components/products/Section12'
import Section8 from '@/components/home/Section8'
export default {
  name: 'Product',
  data () {
    return {
      productId: null
    }
  },
  components: {
    Section0,
    Section1,
    Section2,
    Section3,
    Section12,
    Section8
  },
  watch: {
  },
  mounted () {
    this.productId = this.$route.params.productId
  },
  methods: {
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    contentServices () {
      const content = this.$store.getters['contentStore/getPage']('products')
      if (content) {
        console.log('content: ' + content.data.group_set[0].group_item_title[0].text)
        return content.data
      }
      return null
    },
    content () {
      const content = this.$store.getters['contentStore/getProductPage'](this.productId)
      if (content) {
        return content.data
      }
      return null
    }
  }
}
</script>
<style scoped>
</style>
