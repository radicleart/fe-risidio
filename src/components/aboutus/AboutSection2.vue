<template>
<section class="bg-white" v-if="content">
  <div class="d-flex align-items-center flex-column who-we-are">
    <div class="my-auto">
      <h1 class="mb-3 text-center">{{content.section2_title[0].text}}</h1>
      <h2 class="mb-5 text-center">{{content.section2_subtitle[0].text}}</h2>
      <div class="d-flex justify-content-start">
      <div class="mx-5 mt-5">
        <div class="row">
          <div v-for="(item, index) of content.section2" :key="index" class="col-lg-4 col-md-12">
            <div class="d-flex justify-content-start mobile-margin">
              <div class="">
                <img :src="item.icon.url" :alt="item.icon.alt"/>
              </div>
              <div>
                <prismic-rich-text class="main-content" :field="item.content"/>
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
.main-content >>> h1 {
  white-space: nowrap;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
}

.main-content >>> h2 {
  white-space: nowrap;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #000000;
}
.who-we-are {
  max-width: 1300px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 7rem 0;
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
