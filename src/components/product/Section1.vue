<template>
<section class="bg-lighter" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column">
    <div class="mt-5">
      <div class="d-flex justify-content-between">
        <div class="text-right col-6">
          <img width="80%" :src="content.section1_image.url" />
        </div>
        <div class="col-6">
          <h1 class="text-left">{{content.section1_title[0].text}}</h1>
          <div class="mt-5" v-for="(item, index) of content.section1" :key="index">
            <h2 class="">{{item.tile[0].text}}</h2>
            <p class="">{{item.description1[0].text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section1',
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
.blurb2 {
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
}
</style>
