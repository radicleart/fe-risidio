<template>
<section class="bg-lighter" v-if="content" id="crs-section-1">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <h1 class="mb-4">{{content.s2title1[0].text}}</h1>
          <h2 class="mb-4">{{content.s2title2[0].text}}</h2>
          <p class="mx-auto" v-html="content.s2description[0].text"></p>
          <ul>
            <li v-html="content.s2description[1].text"></li>
            <li v-html="content.s2description[2].text"></li>
          </ul>
          <img :src="content.s2image.url" :alt="content.s2image.alt">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
export default {
  name: 'CSRSection1',
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
img {
  max-width: 75%;
  max-height: 500px;
  margin: 1rem 0 2rem 0;
}
p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
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
  margin-bottom: 10px;
}
.bg-lighter {
  background-color: '#F5F5F5';
}
@media only screen and (max-width: 768px) {
  h2 {
    width: 75%;
  }
  p {
    width: 90%;
  }
  ul {
    width: 90%;
  }
}
</style>
