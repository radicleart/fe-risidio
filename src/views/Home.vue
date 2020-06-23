<template>
<div class="bg-dark home" v-if="content">
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
    <section6 />
    <section7 />
    <section8 />
</div>
</template>

<script>
// @ is an alias to /src
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
    },
    section1 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>
<style>
</style>
