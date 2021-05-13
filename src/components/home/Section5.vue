<template>
    <section class="bg-black" id="products-section">
      <div class="pt-5">
          <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
            <div class="my-auto">
              <div class="mb-5"><h1 class="text-white">{{content.products_title[0].text}}</h1></div>
              <div>
                <vueper-slides style="width: 100vw;"
                class="no-shadow"
                fixed-height="450px"
                :visible-slides="5"
                :arrows=false
                :bullets=false
                :slide-ratio="1 / 4"
                :gap="3"
                :dragging-distance="20"
                :slidesPerGroup= "1"
                :infinite=false
                :breakpoints="breakpoints">
                <vueper-slide v-for="(item, index) of content.products" :key="index">
                  <template v-slot:content>
                    <div class="d-flex flex-column slider-content">
                      <router-link :to="productUrl(item)" class="text-info"><img width="100%" height="250px" :src="item.image.url" :alt="item.image.alt"/></router-link>
                      <div class="d-flex align-items-start flex-column" style="width: 100%">
                        <h2 class="text-white">{{item.title[0].text}}</h2>
                        <div class="mb-0" v-for="(pitem, index2) of item.description" :key="index2">
                          <div v-if="pitem.type === 'paragraph'" class=""><p class="mb-3 text-white" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                        </div>
                        <div class="d-flex justify-content-between w-100">
                          <div v-if="productUrl(item) == '/projects/ruma'" class="more-text"><span class="text-info">{{item.more[0].text}}</span></div>
                          <div v-else-if="productUrl(item) == '/projects/number-one'" class="d-none"></div>
                          <div v-else class="more-text"><router-link :to="productUrl(item)" class="text-info">{{item.more[0].text}}</router-link></div>
                          <div class="more-text" v-html="demoLink(item)"></div>
                        </div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
              </div>
              <br/>
              <div class="my-5 text-center"><button class="button1"><router-link to="/projects" class="call-button-text">All Projects</router-link></button></div>
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
        1250: {
          visibleSlides: 4
        },
        1050: {
          visibleSlides: 3,
          slideRatio: 1 / 3
        },
        800: {
          visibleSlides: 2,
          slideRatio: 1 / 2
        },
        601: {
          visibleSlides: 1
        }
      }
    }
  },
  methods: {
    productUrl (item) {
      const productId = item.product_name[0].text
      if (productId === 'r-pay' || productId === 'lsat') {
        return '/projects/r-pay'
      } else {
        return '/projects/' + item.product_name[0].text
      }
    },
    demoLink (item) {
      const productId = item.product_name[0].text
      if (productId === 'r-pay' || productId === 'lsat') {
        return '<a class="text-warning" href="/rpay-demo">Try The Demo</a>'
      } else if (productId === 'loopbomb') {
        return '<a class="text-warning" href="https://loopbomb.com">Try The Demo</a>'
      } else if (productId === 'dsearch') {
        return '<a class="text-warning" href="https://github.com/radicleart/brightblock-search">Find Us On Github</a>'
      } else if (productId === 'r-stack') {
        return '<a class="text-warning" href="https://stacks.risidio.com">Get Stacking</a>'
      } else if (productId === 'number-one') {
        return '<a class="text-info" href="https://thisisnumberone.com/">Find Out More</a>'
      } else {
        return null
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

<style lang="scss">
#products-section {
  & .slider-content {
    max-width: 200px;
  }

  & .slider-content h2 {
    font-size: 24px;
    margin-top: 12px;
    text-transform: none;
  }

  & .slider-content p {
    font-size: 14px;
  }

  & .slider-content {
    margin: 0 auto;
  }

  & .slider-content img {
    pointer-events: none;
  }
}

/* Paddings for next/previous slide on the edge effect */
#products-section .vueperslides { padding: 0 7rem; }

@media only screen and ( max-width: 900px ) and ( min-width: 801px ) {
  #products-section .vueperslides { padding: 0 4.5rem; }
}

@media only screen and ( max-width: 670px ) {
  #products-section .vueperslides { padding: 0 4.5rem; }
}

@media only screen and ( max-width: 600px ) {
  #products-section .vueperslides { padding: 0 8rem; }
}

@media only screen and ( max-width: 480px ) {
  #products-section .vueperslides { padding: 0 6rem; }
}

@media only screen and ( max-width: 414px ) {
  #products-section .vueperslides { padding: 0 5rem; }
}

@media only screen and ( max-width: 375px ) {
  #products-section .vueperslides { padding: 0 4rem; }
}

@media only screen and ( max-width: 320px ) {
  #products-section .vueperslides { padding: 0 3rem; }
}
</style>
