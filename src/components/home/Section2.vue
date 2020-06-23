<template>
    <section class="bg-white">
      <div>
          <div class="d-flex align-items-center flex-column" :style="sectionDimensions">
            <div class="my-auto text-center">
              <div class="mb-4"><span style="font-weight: 800; font-size: 17px;">{{content.section2_title[0].text}}</span></div>
              <div class="" style="margin-bottom: 80px;"><span style="font-size: 36px; font">{{content.section2_message[0].text}}</span></div>
              <vueper-slides
                class="no-shadow " style="width: 70vw;"
                :bullets="false"
                :visible-slides="2"
                :gap="2"
                :slide-ratio="1 / 3"
                :dragging-distance="150"
                :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 1 } }">
                <template v-slot:arrow-left>
                  <div class="p-3" style="border: 1pt solid #F9B807; border-radius: 40px;"><i class="text-warning fa-1x fas fa-angle-left"></i></div>
                </template>
                <template v-slot:arrow-right>
                  <div class="p-3" style="border: 1pt solid #F9B807; border-radius: 40px;"><i class="text-warning fa-1x fas fa-angle-right"></i></div>
                </template>
                <vueper-slide v-for="(item, index) of content.images" :key="index" style="font-size: 0.8em; min-width: 300px;">
                  <template v-slot:content>
                    <div class="row p-0 m-0" style="">
                      <div class="col-5">
                        <img height="110px" :src="item.image.url" :alt="item.image.alt" class="image" />
                      </div>
                      <div class="text-left col-7">
                        <h6 style="white-space: nowrap; font-size: 13px; font-weight: 900">{{item.section_title[0].text}}</h6>
                        <div v-for="(pitem, index2) of item.image_text" :key="index2">
                          <div v-if="pitem.type === 'paragraph'" class=""><p style="font-size: 12px; font-weight: 500" class="mb-3" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                        </div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Section2',
  components: {
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      icons: ['bahai', 'bahai', 'bahai', 'bahai'],
      arrowR: require('@/assets/img/xd/innovate_light.png'),
      arrowL: require('@/assets/img/xd/innovate_dark.png')
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: 100%;'
    },
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>

<style scoped>
.vueperslides__arrow {
  color: yellow
}
</style>
