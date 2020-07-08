<template>
<div v-if="content" class="bg-white">
    <product-section0 :viewportDimensions="sectionDimensions" :content="content"/>
    <product-section1 :viewportDimensions="sectionDimensions" :content="content"/>
    <product-section2 :viewportDimensions="sectionDimensions" :content="content"/>
    <product-section3 :viewportDimensions="sectionDimensions" :content="content"/>
    <section12 :viewportDimensions="sectionDimensions" :content="contentServices"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import ProductSection0 from '@/components/product/ProductSection0'
import ProductSection1 from '@/components/product/ProductSection1'
import ProductSection2 from '@/components/product/ProductSection2'
import ProductSection3 from '@/components/product/ProductSection3'
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
    ProductSection0,
    ProductSection1,
    ProductSection2,
    ProductSection3,
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
