<template>
<section>
  <div class=" d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white">
      <div class="text-info my-5"><img :src="quotes" /></div>
      <p class="quote mb-4" style="width: 436px">{{content.section_quote[0].text}}</p>
      <h4 class="mt-auto">{{content.section_quote_author[0].text}}</h4>
    </div>
    <div class="my-5"><button class="my-5" v-scroll-to="{ element: '#section6', duration: 2000 }"><span class="call-button-text">More About Us</span></button></div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section3',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
      quotes: require('@/assets/img/quotes.png')
    }
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>

<style scoped>
.author {
  margin-bottom: 100px;
  font-weight: 700;
  font-size: 14px;
}
@media only screen and (max-width: 900px) {
  .quote {
    margin: 0 100px;
  }
}

</style>
