<template>
    <section class="bg-white section-7">
      <div class="">
          <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
            <div class="my-auto">
              <div class="my-5"><h1 class="text-black">{{content.posts_title[0].text}}</h1></div>
              <vueper-slides style="width: 70vw;"
                class="no-shadow d-lg-block d-none"
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
                  <img :src="arrowsRed.left" alt="red-arrow-left">
                </template>
                <template v-slot:arrow-right>
                  <img :src="arrowsRed.right" alt="red-arrow-right">
                </template>
                <vueper-slide v-for="(item, index) of content.posts" :key="index" style="font-size: 0.8em; min-width: 300px;">
                  <template v-slot:content>
                    <div class="text-left">
                      <div v-lazyload class="d-flex align-items-start flex-column" style="min-height: 280px; width: 280px; margin: 0 auto;">
                        <img width="280px" height="200px" :data-url="item.image.url" :alt="item.image.alt" class="image" />
                        <p class="post-date-wrapper"><router-link to="/blog" class="text-danger">{{item.date}}</router-link></p>
                        <h2><router-link to="/blog" class="">{{item.title[0].text}}</router-link></h2>
                        <div class="mb-auto" v-for="(pitem, index2) of item.description" :key="index2">
                          <div v-if="pitem.type === 'paragraph'" class=""><p style="font-size: 12px; font-weight: 500" class="mb-3" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                        </div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
              <div class="d-lg-none d-flex flex-column justify-content-center mobile__content">
                <blog-posts :pageSize="pageSize"></blog-posts>
                <div class="text-center mb-5"><button><router-link to="/blog">Visit Our Blog</router-link></button></div>
              </div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import BlogPosts from '../BlogPosts.vue'
export default {
  name: 'Section7',
  components: {
    VueperSlides,
    VueperSlide,
    BlogPosts
  },
  props: ['viewportDimensions'],
  data () {
    return {
      breakpoints: {
        1300: {
          visibleSlides: 2
        }
      },
      arrowsRed: {
        left: require('@/assets/img/Slider arrows/Arrow_left_red.png'),
        right: require('@/assets/img/Slider arrows/Arrow_right_red.png')
      },
      pageSize: 3
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

.section-7 {
  & h2 {
    font-size: 14px;
    font-weight: 800;
  }
  & h3 {
    margin-top: 20px;
    font-size: 10px;
    font-weight: 600;
  }
  & p {
    font-size: 11px;
    font-weight: 300;
    color: #000;
  }

  & .post-date-wrapper {
    font-size: 10px;
    margin: 20px 0 8px;
  }

  & h2 a {
    color: #000;
  }

  & a:hover {
    color: #000;
  }
}

/* Mobile design */
.mobile__content {
  & .filters {
    display: none;
  }

  & .blog-main {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  & .blog-post {
    margin-bottom: 2rem;
  }

  & button {
    background-color: #F5F5F5;
    color: #E9493D;
  }

  & button:hover {
    background-color: #F5F5F5;
  }

  & button a {
    color: #E9493D;
    text-align: center;
    font-size: 11px;
    font-weight: 700;
  }

  & button a:hover {
    text-decoration: none;
  }
}
</style>
