<template>
<div v-if="content">
    <CSRSection0 :viewportDimensions="sectionDimensions" :content="content"/>
    <CSRSection3 :viewportDimensions="sectionDimensions" :content="content"/>
    <!-- <CSRSection1 :viewportDimensions="sectionDimensions" :content="content"/> -->
    <CSRSection2 :viewportDimensions="sectionDimensions" :content="content"/>
    <Section6 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
// @ is an alias to /src
import CSRSection0 from '@/components/csr/CSRSection0'
import CSRSection1 from '@/components/csr/CSRSection1'
import CSRSection2 from '@/components/csr/CSRSection2'
import CSRSection3 from '@/components/csr/CSRSection3'
import Section6 from '@/components/home/Section6.vue'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'CSR',
  // mixins: [requestMixins],
  components: {
    CSRSection0,
    // CSRSection1,
    CSRSection2,
    CSRSection3,
    Section6
  },
  mounted () {
    console.log(this.$route)
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getCSR']
      return content
    }
  }
}
</script>
<style>
</style>
