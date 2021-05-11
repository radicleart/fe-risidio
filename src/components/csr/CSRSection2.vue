<template>
<section class="bg-white" v-if="content" id="crs-section-2">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <p class="mb-4 text-left description">{{content.s3description[0].text}}</p>
          <h4 class="mb-4 text-left">{{content.s3title[0].text}}</h4>
          <h6 class="mx-auto text-left" v-html="content.s3group[0].s3title[0].text"></h6>
          <div class="we-work-with">
            <div class="row">
              <div class="col-sm-4 col-12"><img :src="content.s3group[0].image.url" :alt="content.s3group[2].image.alt"></div>
              <div class="col-sm-8 col-12 d-flex flex-column justify-content-between">
                <p class="mx-auto text-left" v-html="content.s3group[0].s3description[0].text"></p>
                <router-link to="/projects/x-change">>>> Risidio Xchange</router-link>
              </div>
            </div>
          </div>
          <h6 class="mx-auto text-left" v-html="content.s3group[1].s3title[0].text"></h6>
          <div class="we-work-with">
            <div class="row">
              <div class="col-sm-4 col-12"><img :src="content.s3group[1].image.url" :alt="content.s3group[2].image.alt"></div>
              <div class="col-sm-8 col-12 d-flex flex-column justify-content-between">
                <p class="mx-auto text-left" v-html="content.s3group[1].s3description[0].text"></p>
                <a href="#" style="pointer-events: none;">>>> This is #1 (Coming Soon)</a>
              </div>
            </div>
          </div>
          <h6 class="mx-auto text-left" v-html="content.s3group[2].s3title[0].text"></h6>
          <div class="we-work-with">
            <div class="row">
              <div class="col-sm-4 col-12"><img :src="content.s3group[2].image.url" :alt="content.s3group[2].image.alt"></div>
              <div class="col-sm-8 col-12 d-flex flex-column justify-content-between">
                <p class="mx-auto text-left" v-html="content.s3group[2].s3description[0].text"></p>
                <a href="https://stacks.org/">>>> Stacks Foundation</a>
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
import { SITE_CONSTANTS } from '@/site-constants'
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
  margin: 10px 0 50px 0;
  text-align: right;
  width: 50%;
}
.we-work-with a {
  text-decoration: underline;
}
img {
  width: 100%;
  height: auto;
}
h4, h6 {
  width: 50%;
}
p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
}
.description {
  width: 50%;
}
ul {
  width: 50%;
}
li {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
}
@media only screen and (max-width: 768px) {
  h4, h6, .we-work-with {
    width: 75%;
  }
  .description {
    width: 75%;
  }
  img {
    margin-bottom: 15px;
  }
}
</style>
