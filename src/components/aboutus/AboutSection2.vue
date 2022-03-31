<template>
<section class="bg-lighter" v-if="content">
  <div class="d-flex align-items-center flex-column py-5" :style="viewportDimensions">
    <div class="my-auto">
      <h1 class="mb-3 text-center blurb2">{{content.s3title1[0].text}}</h1>
      <h2 class="mb-5 text-center blurb2">{{content.s3title2[0].text}}</h2>
      <div class="d-flex justify-content-start">
      <div class="mx-5 mt-5">
        <div class="row">
          <div v-for="(item, index) of content.group1" :key="index" class="col-lg-4 col-md-12">
            <div class="d-flex justify-content-start mobile-margin content-wrap">
              <div class="">
                <img :src="item.image.url" :alt="item.image.alt"/>
              </div>
              <div>
                <h2 class="" v-html="item.title1[0].text"></h2>
                <h1 class="" v-html="item.title2[0].text"></h1>
                <p class="" v-html="item.description[0].text"></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AboutSection2',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
/*
img {
  width: 100%;
  height: auto;
}
*/
.content-wrap h1 {
  white-space: nowrap;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
}
.content-wrap h2 {
  white-space: nowrap;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #000000;
}
img {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
@media only screen and (max-width: 1100px) and (min-width: 992px) {
  img { width: 60px; margin-left: 0; }
}
@media only screen and  (max-width: 991px) {
  .mobile-margin { margin-bottom: 2rem; }
}
@media only screen and  (max-width: 425px) {
  img { margin-left: 0; }
}
@media only screen and (max-width: 360px) {
  img { width: 55px; margin-right: 1rem; }
}
</style>
