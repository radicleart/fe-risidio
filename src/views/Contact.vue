<template>
<div id="my-app-element" class="bg-main container-fluid pt-5 mb-5" v-if="loaded">
  <contact-section class="bg-card"/>
   <section8 :viewportDimensions="sectionDimensions" />
</div>
</template>

<script>
import ContactSection from '@/components/help/ContactSection'
import Section8 from '@/components/home/Section8'
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
  }
}
</script>

<style>
.contact-section >>> p { color: #EFF1F2; }
</style>
