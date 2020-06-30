<template>
<div v-if="content">
    <section0 :viewportDimensions="sectionDimensions"/>
    <section1 :viewportDimensions="sectionDimensions" />
    <section2 :viewportDimensions="sectionDimensions" />
    <section3 :viewportDimensions="sectionDimensions" />
    <section4 :viewportDimensions="sectionDimensions" />
    <section5 :viewportDimensions="sectionDimensions" />
    <section6 :viewportDimensions="sectionDimensions" />
    <section7 :viewportDimensions="sectionDimensions" />
    <section8 :viewportDimensions="sectionDimensions" />
</div>
</template>

<script>
// @ is an alias to /src
import Section0 from '@/components/home/Section0'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import Section7 from '@/components/home/Section7'
import Section8 from '@/components/home/Section8'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Home',
  // mixins: [requestMixins],
  components: {
    Section0,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8
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
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>
<style>
</style>
