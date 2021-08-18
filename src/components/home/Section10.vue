  <template>
<section id="section10" class="section10">
  <b-container style="min-height: 60vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 91vh">
        <b-col md="8" sm="10" align-self="center">
                       <div><p class="text-black1">{{section10.text1[0].text}}</p></div>
            <div><p class="text-black1">{{section10.text2[0].text}}</p></div>
                  <div><h1 class="text-black">{{section10.title[0].text}}</h1></div>
        <div><p class="text-black1">{{section10.text3[0].text}}</p></div>
         <div><p class="text-black1">{{section10.text4[0].text}}</p></div>
           <!-- <svg class="svg" src="https://risidio-journal.cdn.prismic.io/risidio-journal/ae6644d6-0cfc-403d-aab8-a7252e5cc8b6_Group+17126.svg" width="100%" height="1100"></svg>-->
</b-col>
  </b-row>
    </b-container>
      <div class="mb-4 d-flex justify-content-center">
            <div class="mr-4"><button><span class="call-button-text">Our Marketplace</span></button></div>
        <div><button class="button1" ><span class="call-button-text">Read more</span></button></div>
       </div>
</section>
</template>

<script>
export default {
  name: 'Section10',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section10 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section10[0]
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
  p { font-size: 20px;
    color: #FFFFFF;
    text-align: center;}
}
.text-black{ color: #FFFFFF;}
.section10{
background: rgb(7,23,100);
background: linear-gradient(180deg, rgba(7,23,100,1) 0%, rgba(0,0,0,1) 0%, rgba(34,14,149,1) 100%);}
</style>
