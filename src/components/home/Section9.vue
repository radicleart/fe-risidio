<template>
<section id="section9"  class="bg-secondary">
  <div class="bg-white section-9" :style="viewportDimensions">
<b-container style="min-height: 60vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 91vh">
    <b-col  md="4" sm="10" align-self="center">
          <div><h1 class="text-black">{{section9.solution[0].text}}</h1></div>
    <div><p class="text-black1">{{section9.solutiontext[0].text}}</p></div>
    <img src="https://risidio-journal.cdn.prismic.io/risidio-journal/a4e38118-ec2d-4e7e-b0a9-a3e620c1a2d0_Group+16086.svg" alt="Girl in a jacket" width="100" height="100"></b-col>
    <b-col md="4" sm="10" align-self="center">
        <div><h1 class="text-black">{{section9.analysis[0].text}}</h1></div>
    <div><p class="text-black">{{section9.analysistext[0].text}}</p></div>
    <img src="https://risidio-journal.cdn.prismic.io/risidio-journal/41607ca1-c4bb-4ac9-8e6a-676313585041_Group+16085.svg" alt="Girl in a jacket" width="100" height="100"></b-col>
    <b-col md="4" sm="10" align-self="center">
    <div><h1 class="text-black">{{section9.cocreating[0].text}}</h1></div>
    <div><p class="text-black">{{section9.cocreatingtext[0].text}}</p></div>
    <img  src="https://risidio-journal.cdn.prismic.io/risidio-journal/b5cef53f-3cb1-48b7-aa4a-50e64dcb04a7_Group+16084.svg" alt="Girl in a jacket" width="100" height="100"></b-col>
  </b-row>
    </b-container>
      </div>
      <div class="mb-4 d-flex justify-content-center">
      </div>
</section>
</template>

<script>
export default {
  name: 'Section9',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section9 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section9[0]
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
  width: 70%;
  font-size: 14px;
}
@media only screen and (min-width: 767px) {
  .blurb1 {
    width: 50%;
  }
}

button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
}
button:hover .call-button-text {
  color: #5FBDC1;
}

.call-button-text {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.button1 {
  width: 141px;
  height: 43px;
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
}
.button1:hover {
  background: white 0% 0% no-repeat padding-box;
}
.button1 .call-button-text {
  color: #5FBDC1;
}
.button1:hover .call-button-text {
  color: #5FBDC1;
}

/* Video */
.video-container {
  width: 50%;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 768px) {
  .video-container {
    width: 75%;
  }
}
@media only screen and (min-width:769px) {
  p { font-size: 10px; }
}
</style>
