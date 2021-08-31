  <template>
<section id="section0">
  <div class="mt-5 d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="d-flex align-items-center flex-column">
      <div class="my-4"><h1 class="text-white">{{section.title[0].text}}</h1></div>
      <div class="mb-4"><h2 class="text-white text-center h2-on-mobile">{{section.subtitle[0].text}}</h2></div>
      <div class="mb-4 blurb1 text-white"  v-for="(item, index) of section.description" :key="index">
        <p class="text-center">{{item.text}}</p>
      </div>
      <div class="mb-4 d-flex justify-content-center">
        <div class="mr-4"><button v-scroll-to="{ element: '#section6', duration: 2000 }"><span class="call-button-text">{{section.link1[0].text}}</span></button></div>
        <div><button class="button1" v-scroll-to="{ element: '#products-section', duration: 2000 }"><span class="call-button-text">Our Products</span></button></div>
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
  p { font-size: 20px; }
}
</style>
