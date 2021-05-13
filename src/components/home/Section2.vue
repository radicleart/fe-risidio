<template>
  <section class="bg-white section-2">
    <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="my-auto text-center">
        <div>
        <h1 class="text-black mb-4">{{content.section2_title[0].text}}</h1>
        <h2 class="text-black mb-5 h2-on-mobile">{{content.section2_message[0].text}}</h2>
        </div>
        <vueper-slides
          class="no-shadow "
          :bullets=true
          :arrows=false
          :visible-slides="1"
          :gap="0"
          :slide-ratio="1 / 6"
          :dragging-distance="100"
          :infinite=false
          :breakpoints="breakpoints">
          <vueper-slide v-for="(item, index) of content.images" :key="index">
            <template v-slot:content>
              <div class="slider__content-wrap">
                <div class="slider__img">
                  <img :src="item.image.url" :alt="item.image.alt" class="image" />
                </div>
                <div class="slider__text">
                  <h3 class="text-black">{{item.section_title[0].text}}</h3>
                  <div v-for="(pitem, index2) of item.image_text" :key="index2">
                    <div v-if="pitem.type === 'paragraph'" class=""><p class="text-black mb-3" v-if="pitem.type === 'paragraph'" v-html="pitem.text"></p></div>
                  </div>
                  <!-- <div class="more-text"><router-link to="/aboutus" class="text-warning">{{item.section_link[0].text}}</router-link></div> -->
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
      breakpoints: {
        601: {
          bullets: true,
          bulletsOutside: true
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

<style lang="scss">

/* Desktop design */
.section-2 {
  & .vueperslides {
    height: 250px;
    width: 55vw;
  }
  & .vueperslide {
    height: 250px;
  }
  & .vueperslides__inner {
    height: 250px;
  }
  & .slider__content-wrap {
    display: flex;
    justify-content: center;
  }
  & .slider__img {
    margin-right: 3rem;
  }
  & .slider__img img {
    height: 250px;
    width: auto;
    pointer-events: none;
  }
  & .slider__text {
    max-width: 200px;
    text-align: left;
  }
}

/* Paddings for next/previous slide on the edge effect */
@media only screen and (max-width:1250px) {
  .section-2 .vueperslides { width: 60vw; }
}

@media only screen and (max-width:1024px) {
  .section-2 .vueperslides { width: 63vw; }
}

@media only screen and (max-width:900px) {
  .section-2 .slider__img img { height: 180px; width: auto; margin-left: 1rem; }
}

@media only screen and (max-width:768px) {
  .section-2 .vueperslides { width: 66vw; }
  .section-2 .slider__img { margin-right: 1.5rem; }
}

@media only screen and ( max-width: 700px ) {
  .section-2 .vueperslides { width: 63vw; }
  .section-2 .slider__img img { height: 120px; width: auto; margin-left: 3rem; }
}

/* Mobile design */
.section-2 .vueperslides__bullets {
  position: absolute;
  bottom: -40px;
}

.section-2 .vueperslides__bullet {
  color: #F9B807;
  width: 8px;
  height: auto;
  margin: 0 5px;
}

.section-2 .vueperslides__bullet .default {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  box-shadow: none;
  background-color: rgba(249, 184, 7, 0.3);
  border: none;
}

.section-2 .vueperslides__bullet--active .default {
  background-color: rgb(249, 184, 7);
}

@media only screen and (max-width:600px) {
  .section-2 {
  & .vueperslides { width: 100vw; }
  & .slider__img { margin-right: 0; }
  & .slider__img img { height: 205px; width: 185px; margin-left: 0; }
  & .slider__content-wrap { display: flex; flex-flow: column; justify-content: center; align-items: center; }
  & .slider__text { max-width: 300px; text-align: center; margin-top: 2rem; }
  & .slider__text p, .section-2 .slider__text h3 { text-align: center; }
  & { min-height: 800px; }
  & .vueperslides { height: 400px; }
  & .vueperslide { height: 400px; }
  }
}
@media only screen and (max-width:425px) {
  .section-2 .slider__text { max-width: 220px; }
  .section-2 .vueperslides__bullets { bottom: -65px; }
}

@media only screen and (max-width:375px) {
  .section-2 { min-height: 750px; }
}

@media only screen and (max-width:320px) {
  .section-2 { min-height: 650px; }
}

</style>
