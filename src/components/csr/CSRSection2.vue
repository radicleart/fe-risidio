<template>
<section class="bg-white" v-if="content" id="crs-section-2">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5 w-100">
      <h4 class="mb-4 text-center w-75">{{content.s3title[0].text}}</h4>
      <div class="we-work-with">
        <div class="row">
          <div class="col-lg-4 col-12 mb-5 d-flex flex-column align-items-center">
            <div class="we-work-with--content">
              <img :src="content.s3group[0].image.url" :alt="content.s3group[2].image.alt">
              <h4 class="text-left" v-html="content.s3group[0].s3title[0].text"></h4>
              <p class="text-left" v-html="content.s3group[0].s3description[0].text"></p>
              <router-link to="/marketplace" class="text-info">Find Out More...</router-link>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-5 d-flex flex-column align-items-center">
            <div class="we-work-with--content">
              <img :src="content.s3group[1].image.url" :alt="content.s3group[2].image.alt">
              <h4 class="text-left" v-html="content.s3group[1].s3title[0].text"></h4>
              <p class="text-left" v-html="content.s3group[1].s3description[0].text"></p>
              <a href="https://thisisnumberone.com/" class="text-info">Find Out More...</a>
            </div>
          </div>
          <div class="col-lg-4 col-12 d-flex flex-column align-items-center">
            <div class="we-work-with--content">
              <img :src="content.s3group[2].image.url" :alt="content.s3group[2].image.alt">
              <h4 class="text-left" v-html="content.s3group[2].s3title[0].text"></h4>
              <p class="text-left" v-html="content.s3group[2].s3description[0].text"></p>
              <a href="https://stacks.org/" class="text-info">Find Out More...</a>
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
  name: 'CSRSection2',
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
.we-work-with {
  margin: 10px 0 0 0;
  text-align: left;
  width: 90%;
}
.we-work-with--content {
  max-width: 250px;
}
.we-work-with--content a {
  display: flex;
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
}
.we-work-with--content p {
  width: 100%;
}
.we-work-with--content h4 {
  width: 100%;
}
img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
}
li {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
}
@media only screen and (max-width: 768px) {
  .we-work-with {
    width: 75%;
  }
}
</style>
