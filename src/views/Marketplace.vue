<template>
<div v-if="content" class="bg-white">
    <marketplace-section0 :viewportDimensions="sectionDimensions" :content="content"/>
    <marketplace-section1 :viewportDimensions="sectionDimensions" :content="content"/>
    <marketplace-section2 :viewportDimensions="sectionDimensions" :content="content"/>
    <marketplace-section3 :viewportDimensions="sectionDimensions" :content="content"/>
    <section12 :viewportDimensions="sectionDimensions" :content="contentServices"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import MarketplaceSection0 from '@/components/marketplace/MarketplaceSection0'
import MarketplaceSection1 from '@/components/marketplace/MarketplaceSection1'
import MarketplaceSection2 from '@/components/marketplace/MarketplaceSection2'
import MarketplaceSection3 from '@/components/marketplace/MarketplaceSection3'
import Section12 from '@/components/products/Section12'
import Section8 from '@/components/home/Section8'
export default {
  name: 'Marketplace',
  data () {
    return {
      productId: null
    }
  },
  components: {
    MarketplaceSection0,
    MarketplaceSection1,
    MarketplaceSection2,
    MarketplaceSection3,
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
    contentServices () {
      const content = this.$store.getters['contentStore/getPage']('products')
      if (content) {
        console.log('content: ' + content.data.group_set[0].group_item_title[0].text)
        return content.data
      }
      return null
    },
    content () {
      const content = this.$store.getters['contentStore/getProductPage']('x-change')
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
