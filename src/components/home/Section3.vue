<template>
    <section class="">
      <div class="">
          <div class="d-flex align-items-center flex-column" :style="sectionDimensions">
            <div class="my-auto text-center text-white">
              <div class="text-info my-5"><i class="fa-2x fas fa-quote-left"></i></div>
              <div class="quote mb-4"><span>{{content.section_quote[0].text}}</span></div>
              <div class="author"><span>{{content.section_quote_author[0].text}}</span></div>
              <div><b-button pill variant="outline-info" class="p-2 bg-gray">More About Us</b-button></div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section3',
  components: {
  },
  data () {
    return {
      arrowR: require('@/assets/img/xd/innovate_light.png'),
      arrowL: require('@/assets/img/xd/innovate_dark.png')
    }
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

<style scoped>
.author {
  margin-bottom: 100px;
  font-weight: 700;
  font-size: 14px;
}
.quote {
  margin: 0 300px;
  font-weight: 200;
  font-size: 26px;
}
@media only screen and (max-width: 900px) {
  .quote {
    margin: 0 100px;
  }
}

</style>
