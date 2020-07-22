<template>
  <section class="bg-white section-2">
    <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="my-auto text-center">
        <div>
        <h1 class="text-black mb-4">{{content.section2_title[0].text}}</h1>
        <h2 class="text-black mb-5">{{content.section2_message[0].text}}</h2>
        </div>
        <vueper-slides
          class="no-shadow " style="width: 70vw; margin: 0 auto;"
          :bullets-outside=true
          :bullets=false
          :visible-slides="2"
          :gap="1"
          fixed-height="250px"
          :slide-ratio="1 / 6"
          :dragging-distance="150"
          :breakpoints="{ 1080: { visibleSlides: 1, slideMultiple: 1 }, 800: { visibleSlides: 1, slideMultiple: 1, arrows: false, bullets: true } }">
          <template v-slot:arrow-left>
            <div class="shifter left-shifter"><i class="text-warning fa-1x fas fa-angle-left"></i></div>
          </template>
          <template v-slot:arrow-right>
            <!-- <img :src="leftArrow"/> -->
            <div class="shifter right-shifter"><i class="text-warning fa-1x fas fa-angle-right"></i></div>
          </template>
          <vueper-slide v-for="(item, index) of content.images" :key="index" style="height: 500px;">
            <template v-slot:content style="height: 500px;">
              <div class="row p-0 justify-content-center">
                <div class="col-4">
                  <img width="95%" height="130px" :src="item.image.url" :alt="item.image.alt" class="image" />
                </div>
                <div class="text-left col-6">
                  <h3 class="text-black">{{item.section_title[0].text}}</h3>
                  <div v-for="(pitem, index2) of item.image_text" :key="index2">
                    <div v-if="pitem.type === 'paragraph'" class=""><p class="text-black mb-3" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                  </div>
                  <div class="more-text"><router-link to="/about" class="text-warning">{{item.section_link[0].text}}</router-link></div>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Section2',
  components: {
    VueperSlides,
    VueperSlide
  },
  props: ['viewportDimensions'],
  data () {
    return {
      leftArrow: require('@/assets/img/Group 990/Group 990.png')
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
.shifter {
  color: #5FBDC1;
  border: 1pt solid #F9B807;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: relative;
  top: -70px;
}
.shifter i {
  position: relative;
  top: 38%;
}
.right-shifter {
    margin-left: 8em;
}
.left-shifter {
    margin-left: -3.5em;
}
@media (max-width:414px) {
  h3 { font-size: 15px; }
  p { font-size: 10px; }
}

@media (max-width:320px) {
  h3 { font-size: 12px; }
  p { font-size: 9px; }
}
</style>
