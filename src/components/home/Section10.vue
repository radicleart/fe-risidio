<template>
  <section id="section10" class="section10" style="min-height: 80vh">
    <b-container class="text-center" style="padding-top: 15vh" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <div><p class="text-white" style="font-weight: bold;">{{section10.text1[0].text}}</p></div>
          <div><h1 class="text-white">{{section10.title[0].text}}</h1></div>
          <div><p class="text-white">{{section10.text2[0].text}}</p></div>
          <div><p class="text-white" style="font-weight: bold;">{{section10.text3[0].text}}</p></div>
          <div><p class="text-white">{{section10.text4[0].text}}</p></div>
           <!-- <svg class="svg" src="https://risidio-journal.cdn.prismic.io/risidio-journal/ae6644d6-0cfc-403d-aab8-a7252e5cc8b6_Group+17126.svg" width="100%" height="1100"></svg>-->
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center pt-5">
      <div class="mr-4"><button>Our Marketplace</button></div>
      <div><router-link to="/projects/x-change"><button class="button1">Read more</button></router-link></div>
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
h1 {
  font-size: 36px;
  font-weight: 200;
}
button {
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}
button:hover {
  color: #5FBDC1;
}

.button1 {
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
}
.button1:hover {
  background: white 0% 0% no-repeat padding-box;
}

@media only screen and (min-width:769px) {
  p { font-size: 20px;
    color: #FFFFFF;
    text-align: center;}
}
.text-white {
  color: #FFFFFF;
}

.section10 {
background: transparent linear-gradient(180deg, #220E95 0%, #071764 100%) 0% 0% no-repeat padding-box;
}
</style>
