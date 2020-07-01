<template>
    <section class="bg-white">
      <div class="">
          <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
            <div class="my-auto text-center">
              <div class="my-4 mb-5"><h1 class="text-black">{{content.posts_title[0].text}}</h1></div>
              <vueper-slides style="width: 70vw;"
                class="no-shadow"
                fixed-height="400px"
                :visible-slides="3"
                slide-multiple
                :slide-ratio="1 / 4"
                :gap="1"
                :arrows-outside=true
                :bullets=false
                :bullets-outside=true>
                <template v-slot:arrow-left>
                  <div class="shifter mr-5" style="position: relative; left: -50px;"><i class="text-warning fa-1x fas fa-angle-left"></i></div>
                </template>
                <template v-slot:arrow-right>
                  <div class="shifter ml-5" style="position: relative; right: -40px;"><i class="text-warning fa-1x fas fa-angle-right"></i></div>
                </template>
                <vueper-slide v-for="(item, index) of content.posts" :key="index" style="font-size: 0.8em; min-width: 300px;">
                  <template v-slot:content>
                    <div class="text-left">
                      <div class="d-flex align-items-start flex-column" style="min-height: 280px; width: 280px">
                        <img width="280px" height="200px" :src="item.image.url" :alt="item.image.alt" class="image" />
                        <h3 class="text-black"><router-link to="/blog" class="text-warning">{{item.date}}</router-link></h3>
                        <h2 class="text-black"><router-link to="/blog" class="">{{item.title[0].text}}</router-link></h2>
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
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Section5',
  components: {
    VueperSlides,
    VueperSlide
  },
  props: ['viewportDimensions'],
  data () {
    return {
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

<style lang="scss" scoped>
.shifter {
  color: #5FBDC1;
  border: 1pt solid #E9493D;
  width: 72px;
  height: 72px;
  border-radius: 50%;
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
.text-warning {
  color: #E9493D !important;
}
</style>
