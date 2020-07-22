  <template>
<section id="section0">
  <div class="mt-5 d-flex align-items-center flex-column mobile-gap" :style="viewportDimensions">
    <div class="d-flex align-items-center flex-column">
      <div class="my-4"><h1 class="text-white">{{section.title[0].text}}</h1></div>
      <div class="mb-4"><h2 class="text-white text-center">{{section.subtitle[0].text}}</h2></div>
      <div class="mb-4 blurb1 text-white"  v-for="(item, index) of section.description" :key="index">
        <p class="text-center">{{item.text}}</p>
      </div>
      <div class="mb-4 d-flex justify-content-center">
        <div class="mt-5 mr-4"><button v-scroll-to="{ element: '#section6', duration: 2000 }"><span class="call-button-text">{{section.link1[0].text}}</span></button></div>
        <div class="mt-5"><button class="button1" v-scroll-to="{ element: '#productsSection', duration: 2000 }"><span class="call-button-text">{{section.link2[0].text}}</span></button></div>
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
@media (min-width: 767px) {
  .blurb1 {
    width: 50%;
  }
}

button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
}
button:hover .call-button-text {
  color: #5FBDC1;
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
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
  opacity: 1;
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

@media (min-width:769px) {
  p { font-size: 14px; }
}
</style>
