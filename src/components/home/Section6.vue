<template>
  <section id="section6" class="d-flex flex-column justify-content-center bg-white" style="min-height: 80vh">
    <b-container class="text-center py-5" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <h1 class="mb-3">{{ section6.title[0].text }}</h1>
          <h2 class="mb-5">{{ section6.subtitle[0].text }}</h2>
          <video controls>
              <source :src="section6.video.url" type="video/mp4">
              Sorry, your browser doesn't support embedded videos.
          </video>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Section6',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section6 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section6[0]
    }
  }
}
</script>

<style scoped>
  h1 {
    text-transform: none;
  }
  video {
    width: 100%;
  }
  video::-webkit-media-controls-fullscreen-button
  {
    display: none !important;
  }
</style>
