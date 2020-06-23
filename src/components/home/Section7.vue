<template>
    <section class="bg-white">
      <div class="">
          <div class="d-flex align-items-center flex-column" :style="sectionDimensions">
            <div class="my-auto text-center">
              <div class="mb-4 mb-5" style="margin-bottom: 100px; font-weight: 700; font-size: 17px;">{{content.posts_title[0].text}}</div>
              <vueper-slides style="width: 70vw;"
                class="no-shadow "
                fixed-height="320px"
                :bullets="false"
                :visible-slides="3"
                slide-multiple
                :gap="1"
                :slide-ratio="1 / 6"
                :dragging-distance="150"
                :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 1 } }">
                <template v-slot:arrow-left>
                  <div class="shifter"><i class="text-warning fa-1x fas fa-angle-left"></i></div>
                </template>
                <template v-slot:arrow-right>
                  <div class="shifter"><i class="text-warning fa-1x fas fa-angle-right"></i></div>
                </template>
                <vueper-slide v-for="(item, index) of content.posts" :key="index" style="font-size: 0.8em; min-width: 300px;">
                  <template v-slot:content>
                    <div class="text-left">
                      <div class="d-flex align-items-start flex-column" style="min-height: 280px; width: 280px">
                        <img width="280px" height="200px" :src="item.image.url" :alt="item.image.alt" class="image" />
                        <h3><router-link to="/blog" class="text-warning">{{item.date}}</router-link></h3>
                        <h2><router-link to="/blog" class="">{{item.title[0].text}}</router-link></h2>
                        <div class="mb-auto" v-for="(pitem, index2) of item.description" :key="index2">
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
  color: #F9B807;
  border: 1pt solid #F9B807;
  border-radius: 40px;
}
h2 {
  font-size: 14px;
  font-weight: 800;
}
h3 {
  margin-top: 20px;
  font-size: 10px;
  font-weight: 600;
}
p {
  font-size: 11px;
  font-weight: 300;
}
.more {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
.joinus-desc {
  margin: 50px 0 0 0;
  padding: 0 200px;
}

</style>
