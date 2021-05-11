<template>
<div v-if="content">
    <about-section0 :viewportDimensions="sectionDimensions" :content="content"/>
    <about-section1 :viewportDimensions="sectionDimensions" :content="content"/>
    <about-section2 :viewportDimensions="sectionDimensions" :content="content"/>
    <about-section3 :viewportDimensions="sectionDimensions" :content="content"/>
    <section8 :viewportDimensions="sectionDimensions"/>
</div>
</template>

<script>
// @ is an alias to /src
import AboutSection0 from '@/components/aboutus/AboutSection0'
import AboutSection1 from '@/components/aboutus/AboutSection1'
import AboutSection2 from '@/components/aboutus/AboutSection2'
import AboutSection3 from '@/components/aboutus/AboutSection3'
import Section8 from '@/components/home/Section8'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'About',
  // mixins: [requestMixins],
  components: {
    AboutSection0,
    AboutSection1,
    AboutSection2,
    AboutSection3,
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
      const content = this.$store.getters['contentStore/getAboutUs']
      return content
    }
  }
}
</script>
<style>
</style>
