<template>
<section class="bg-lighter" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center">
      <div class="mt-3 mb-5"><h1 class="text-black">{{content.section2_title[0].text}}</h1></div>
      <div class="mx-auto text-black w-50" v-for="(item, index) of content.group2" :key="index">
        <h2 class="text-center blurb2">{{item.title[0].text}}</h2>
        <p class="text-center blurb2">{{item.description[0].text}}</p>
      </div>
      <div class="mt-5 d-flex justify-content-between">
        <button><span class="call-button-text">{{content.section2_link[0].text}}</span></button>
        <button><span class="call-button-text">{{content.section2_link[0].text}}</span></button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section12',
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
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  opacity: 1;
}
.card-title {
  white-space: nowrap;
}
.card-text {
  min-height: 100px;
}
.card-img-top {
  height: 300px;
}
h1 {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
</style>
