<template>
  <div class="main" :style="sectionDimensions">
    <div class="outer-container">
      <div class="back">
        <router-link to="./">back to list</router-link>
      </div>
      <h1>Page not found</h1>
      <p>Sorry we were unable to find the page you are looking for.</p>
      <router-link to="/blog" style="text-decoration: underline;">Return to home</router-link>
    </div>
  </div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'NotFound',
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    }
  }
}
</script>
