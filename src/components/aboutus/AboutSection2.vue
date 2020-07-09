<template>
<section class="bg-white" v-if="content">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto">
      <h1 class="mb-3 text-center blurb2">{{content.s3title1[0].text}}</h1>
      <h2 class="mb-5 text-center blurb2">{{content.s3title2[0].text}}</h2>
      <div class="d-flex justify-content-start">
      <div class="mx-5 mt-5">
        <div class="row">
          <div v-for="(item, index) of content.group1" :key="index" class="col-md-4 col-sm-6 col-xs-12">
            <div class="d-flex justify-content-start">
              <div class="">
                <img class="mx-4" :src="item.image.url"/>
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
h1 {
  white-space: nowrap;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
h2 {
  white-space: nowrap;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
</style>
