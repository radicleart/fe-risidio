<template>
    <section class="bg-white section-7">
      <div class="">
          <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
            <div class="my-auto text-center">
              <div class="my-4 mb-5 textOnMobile"><h1 class="text-black">{{content.posts_title[0].text}}</h1></div>
              <vueper-slides style="width: 70vw;"
                class="no-shadow"
                fixed-height="405px"
                :visible-slides="3"
                slide-multiple
                :slide-ratio="1 / 4"
                :gap="0"
                :arrows-outside=true
                :bullets=false
                :bullets-outside=true
                :breakpoints="breakpoints">
                <template v-slot:arrow-left>
                  <img :src="arrowsRed.left" alt="">
                </template>
                <template v-slot:arrow-right>
                  <img :src="arrowsRed.right" alt="">
                </template>
                <vueper-slide v-for="(item, index) of content.posts" :key="index" style="font-size: 0.8em; min-width: 300px;">
                  <template v-slot:content>
                    <div class="text-left">
                      <div class="d-flex align-items-start flex-column mobileView" style="min-height: 280px; width: 280px; margin: 0 auto;">
                        <img width="280px" height="200px" :src="item.image.url" :alt="item.image.alt" class="image" />
                        <h3 class="text-black"><router-link to="/blog" class="text-danger">{{item.date}}</router-link></h3>
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
      breakpoints: {
        1300: {
          visibleSlides: 2
        },
        850: {
          visibleSlides: 1,
          arrows: false,
          bullets: true,
          slideRatio: 1 / 2
        }
      },
      arrowsRed: {
        left: require('@/assets/img/Slider arrows/Arrow_left_red.png'),
        right: require('@/assets/img/Slider arrows/Arrow_right_red.png')
      }
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
.vueperslides__track img {
  pointer-events: none;
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

@media only screen and (max-width: 850px) {
  .mobileView { margin: 0 auto; }
}
@media only screen and (max-width:414px) {
  .vueperslides { width: 80vw !important; }
  .section-7 { min-height: 600px; }
}
@media only screen and (max-width:360px) {
  .vueperslides { width: 85vw !important; }
}
@media only screen and (max-width:320px) {
  .vueperslides { width: 95vw !important; }
}
</style>
