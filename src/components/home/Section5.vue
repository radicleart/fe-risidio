<template>
    <section class="bg-black" id="productsSection">
      <div class="pt-3">
          <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
            <div class="my-auto">
              <div class="mb-5"><h1 class="text-white">{{content.products_title[0].text}}</h1></div>
              <div class="mx-5">
                <vueper-slides style="width: 70vw; "
                class="no-shadow"
                fixed-height="400px"
                :visible-slides="2"
                slide-multiple
                :slide-ratio="1 / 4"
                :gap="1"
                :arrows-outside=true
                :bullets-outside=true
                :bullets=false
                :breakpoints="breakpoints">
                <template v-slot:arrow-left>
                  <div class="shifter"><i class="text-info fa-1x fas fa-angle-left"></i></div>
                </template>
                <template v-slot:arrow-right>
                  <div class="shifter" style="margin-left: 150px;"><i class="text-info fa-1x fas fa-angle-right"></i></div>
                </template>
                <vueper-slide v-for="(item, index) of content.products" :key="index">
                  <template v-slot:content>
                    <div class="d-flex justify-content-start">
                      <img class="pl-5" width="50%" :src="item.image.url" :alt="item.image.alt"/>
                      <div class="pl-4 d-flex align-items-start flex-column">
                        <h2 class="text-white responsive-view">{{item.title[0].text}}</h2>
                        <div class="mb-0" v-for="(pitem, index2) of item.description" :key="index2">
                          <div v-if="pitem.type === 'paragraph'" class=""><p class="mb-3 text-white" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                        </div>
                        <div class="more-text"><router-link to="/about" class="text-info">{{item.more[0].text}}</router-link></div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
              </div>
              <div class="my-5 text-center"><button class="button1"><span class="call-button-text">All Products</span></button></div>
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
          visibleSlides: 1
        },
        1050: {
          visibleSlides: 1,
          arrows: false
        },
        768: {
          visibleSlides: 1,
          arrows: false,
          bullets: true
        }
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

<style>
.shifter {
  padding: 25px;
  color: #5FBDC1;
  width: 72px;
  border: 1pt solid #5FBDC1;
  height: 72px;
  border-radius: 50%;
}

.vueperslides__bullet .default {
  background-color: #5FBDC1;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
  opacity: 1;
}

.vueperslides__bullet--active .default {background-color: #5FBDC1;}

.vueperslides__bullet span {
  display: block;
  background-color: #5FBDC1;
  font-size: 20px;
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .responsive-view { font-size: 26px; }
}

</style>
