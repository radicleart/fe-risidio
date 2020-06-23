<template>
    <section id="section6" class="bg-secondary">
      <div class="mx-5 d-flex align-items-center flex-column" :style="sectionDimensions">
        <div class="my-auto text-center text-white">
          <div class="mb-2"><img width="300px" :src="section6.image.url" /></div>
          <div class="mb-4"><h2>{{section6.title[0].text}}</h2></div>
          <div class="mb-2"><h4>{{section6.subtitle[0].text}}</h4></div>
          <div class=" mb-4 joinus-desc"><span>{{section6.description[0].text}}</span></div>
          <div class="d-flex justify-content-center">
            <div><b-button pill variant="info" class="more mt-5 mr-4 p-2 px-4 text-white">{{section6.link1[0].text}}</b-button></div>
            <div><b-button pill variant="outline-info" class="more mt-5 p-2 bg-gray">{{section6.link2[0].text}}</b-button></div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section4',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    section6 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section6[0]
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 12px;
  font-weight: 800;
}
h3 {
  font-size: 36px;
  font-weight: 200;
  white-space: nowrap;
}
p {
  font-size: 12px;
  font-weight: 400;
}
.more {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
.joinus-desc {
  margin: 50px 0 0 0;
  padding: 10px 200px;
}
.whatsit {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
@media only screen and (max-width: 900px) {
  .joinus-desc {
    margin: 50px 0 0 0;
    padding: 10px 20px;
  }
}

</style>
