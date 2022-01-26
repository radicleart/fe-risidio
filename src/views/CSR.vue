<template>
<div v-if="content">
    <CSRSection0 :viewportDimensions="sectionDimensions" :section0="content.section0[0]"/>
    <CSRSection1 :viewportDimensions="sectionDimensions" :section1="content.section1[0]"/>
    <CSRSection2 :viewportDimensions="sectionDimensions" :content="content"/>
    <section6 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
// @ is an alias to /src
import CSRSection0 from '@/components/csr/CSRSection0'
import CSRSection1 from '@/components/csr/CSRSection1'
import CSRSection2 from '@/components/csr/CSRSection2'
import { SITE_CONSTANTS } from '@/site-constants'
import Section6 from '@/components/home/Section6'

export default {
  name: 'CSR',
  // mixins: [requestMixins],
  components: {
    CSRSection0,
    CSRSection1,
    CSRSection2,
    Section6
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
