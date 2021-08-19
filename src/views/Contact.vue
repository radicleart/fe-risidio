<template>
<div id="my-app-element" class="bg-main container-fluid mb-5 p-0" v-if="loaded">
  <contact-section class="p-0"/>
  <section8 :viewportDimensions="sectionDimensions" />
</div>
</template>

<script>
import ContactSection from '@/components/help/ContactSection'
import Section8 from '@/components/home/Section8'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  components: {
    ContactSection,
    Section8
  },
  name: 'Contact',
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    const content = this.$store.state.contentStore.content['main-content']
    if (!content) {
      this.$prismic.client.getSingle('main-content').then(document => {
        if (document) {
          this.$store.commit('contentStore/mainContent', document.data)
        }
      })
    }
    this.loaded = true
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    }
  }
}
</script>

<style>
.contact-section >>> p { color: #EFF1F2; }

.contact-section {
  background-color: #5154A1;
  width: 100%;
}
</style>
