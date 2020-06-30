<template>
<section id="section6" class="bg-secondary">
  <div class="mx-5 d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white">
      <div class="mb-2"><img width="300px" :src="section6.image.url" /></div>
      <div class="my-4"><h1 class="text-white">{{section6.title[0].text}}</h1></div>
      <div class="mb-2"><h2 class="text-white">{{section6.subtitle[0].text}}</h2></div>
      <div class=" mb-4 blurb"><span>{{section6.description[0].text}}</span></div>
      <div class="d-flex justify-content-center">
        <div class="mt-5 mr-4"><button><span class="call-button-text">{{section6.link1[0].text}}</span></button></div>
        <div class="mt-5"><button class="button1"><span class="call-button-text">{{section6.link2[0].text}}</span></button></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section4',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section6 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section6[0]
    }
  }
}
</script>

<style scoped>
.more {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
}
button:hover {
  background: transparent 0% 0% no-repeat padding-box;
}
.call-button-text {
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
.button1 {
  width: 141px;
  height: 43px;
  background: transparent 0% 0% no-repeat padding-box;
  border: 1px solid #5FBDC1;
  border-radius: 22px;
  opacity: 1;
}
.button1:hover {
  background: #5FBDC1 0% 0% no-repeat padding-box;
}
</style>
