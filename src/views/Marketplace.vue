<template>
  <div v-if='content' class='bg-white'>
    <marketplace-section0
      :viewportDimensions='sectionDimensions'
      :section0='content.section0[0]'
    />
    <marketplace-section1
      :viewportDimensions='sectionDimensions'
      :section1='content.section1[0]'
    />
    <!-- <marketplace-section2 :section2='content.section2[0]'/> -->
    <marketplace-section3
      :viewportDimensions='sectionDimensions'
      :content='content'
    />
    <section6 :viewportDimensions='sectionDimensions' />
  </div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import MarketplaceSection0 from '@/components/marketplace/MarketplaceSection0'
import MarketplaceSection1 from '@/components/marketplace/MarketplaceSection1'
import MarketplaceSection2 from '@/components/marketplace/MarketplaceSection2'
import Section8 from '@/components/home/Section8'
export default {
  name: 'Marketplace',
  data () {
    return {}
  },
  components: {
    MarketplaceSection0,
    MarketplaceSection1,
    MarketplaceSection2,
    Section8
  },
  watch: {
  },
  methods: {
  },
  watch: {},
  methods: {},
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getMarketplace']
      return content
    }
  }
}
</script>
<style scoped></style>
