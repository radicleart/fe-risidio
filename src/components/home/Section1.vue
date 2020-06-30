<template>
<section id="section0">
  <div class="mt-5 d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="d-flex align-items-center flex-column">
      <div class="my-4"><h1 class="text-white">{{section.title[0].text}}</h1></div>
      <div class="mb-4"><h2 class="text-white">{{section.subtitle[0].text}}</h2></div>
      <div class="mb-4 blurb1 text-white">
        <p class="text-center text-large">{{section.description[0].text}}</p>
        <p class="text-center text-large">{{section.description[1].text}}</p>
      </div>
      <div class="d-flex justify-content-center">
        <div class="mt-5 mr-4"><button><span class="call-button-text">{{section.link1[0].text}}</span></button></div>
        <div class="mt-5"><button class="button1"><span class="call-button-text">{{section.link2[0].text}}</span></button></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section1',
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section0[0]
    }
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
.blurb1 {
  width: 450px;
  font-size: 14px;
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
