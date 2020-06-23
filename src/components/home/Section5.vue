<template>
    <section class="bg-dark">
      <div class="mt-5">
          <div class="mt-5 d-flex align-items-center flex-column" :style="sectionDimensions">
            <div class="my-auto text-center">
              <div class="mb-4 text-white mb-5" style="margin-bottom: 200px; font-weight: 700; font-size: 17px;">{{content.products_title[0].text}}</div>
              <vueper-slides style="width: 80vw;"
                class="no-shadow "
                fixed-height="320px"
                :bullets="false"
                :visible-slides="3"
                :gap="3"
                :slide-ratio="1 / 4"
                :dragging-distance="150"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                <template v-slot:arrow-left>
                  <div class="shifter"><i class="text-info fa-1x fas fa-angle-left"></i></div>
                </template>
                <template v-slot:arrow-right>
                  <div class="shifter"><i class="text-info fa-1x fas fa-angle-right"></i></div>
                </template>
                <vueper-slide v-for="(item, index) of content.products" :key="index" style="font-size: 0.8em;">
                  <template v-slot:content>
                    <div class="text-left row" style="">
                      <div class="col-md-6 col-sm-12 mb-4">
                        <img height="200px" :src="item.image.url" :alt="item.image.alt" class="image" />
                      </div>
                      <div class=" col-md-6 col-sm-12">
                        <div class="d-flex align-items-start flex-column" style="min-height: 280px;">
                          <h6 style="white-space: nowrap; font-size: 13px; font-weight: 900">{{item.title[0].text}}</h6>
                          <div class="mb-auto" v-for="(pitem, index2) of item.description" :key="index2">
                            <div v-if="pitem.type === 'paragraph'" class=""><p style="font-size: 12px; font-weight: 500" class="mb-3" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                          </div>
                          <div class="more"><router-link to="/about" class="text-info">{{item.more[0].text}}</router-link></div>
                        </div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
              <div><b-button pill variant="outline-info" class="more mb-4 p-2 bg-gray">All Products</b-button></div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Section5',
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

<style lang="scss" scoped>
.shifter {
  padding: 10px;
  color: #5FBDC1;
  border: 1pt solid #5FBDC1;
  border-radius: 40px;
}
.more {
  font-weight: 500;
  font-size: 12px;
}

</style>
