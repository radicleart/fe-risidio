<template>
<section id="about-section1" class="bg-lighter" v-if="content">
  <div class="d-flex align-items-center flex-column py-5" :style="viewportDimensions">
    <div class="my-auto">
      <h2 class="mb-3 text-center blurb2">{{content.section2_title[0].text}}</h2>
      <h3 class="mb-5 text-center blurb2">{{content.section2_subtitle[0].text}}</h3>
      <div class="d-flex justify-content-start">
      <div class="mx-5 mt-5">
        <div class="row">
          <div v-for="(item, index) of content.section2" :key="index" class="col-lg-4 col-md-12">
            <div class="d-flex justify-content-start mobile-margin content-wrap">
              <div class="">
                <img :src="item.icon.url" alt=""/>
              </div>
              <div>
                <div class="name" v-html="item.content[0].text"></div>
                <div class="role" v-html="item.content[1].text"></div>
                <p class="" v-html="item.content[2].text"></p>
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
  name: 'AboutSection1',
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
.content-wrap .role, .content-wrap .name {
  white-space: nowrap;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 8px;
}
.content-wrap .role {
  font-size: 12px;
  font-weight: 700;
}
.content-wrap .name {
  font-size: 17px;
  font-weight: 300;
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
