<template>
  <section id="section3" class="section3 d-flex flex-column justify-content-center" style="min-height: 80vh">
    <b-container class="text-center pt-5" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <p class="text-white" style="font-weight: bold;">{{section3.text1[0].text}}</p>
          <h1 class="text-white">{{section3.title[0].text}}</h1>
          <p class="text-white">{{section3.text2[0].text}}</p>
          <p class="text-white" style="font-weight: bold;">{{section3.text3[0].text}}</p>
          <p class="text-white">{{section3.text4[0].text}}</p>
           <!-- <svg class="svg" src="https://risidio-journal.cdn.prismic.io/risidio-journal/ae6644d6-0cfc-403d-aab8-a7252e5cc8b6_Group+17126.svg" width="100%" height="1100"></svg>-->
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center py-5">
      <!-- <div class="mr-4"><button>Our Marketplace</button></div> -->
      <div><router-link to="/projects/x-change"><button class="button1">Read more</button></router-link></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section3',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section3 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section3[0]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 36px;
  font-weight: 200;
}
p {
  text-align: center;
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

.section3 {
  background: url('https://risidio-journal.cdn.prismic.io/risidio-journal/5fc21e1e-56cc-4428-8a21-756c4bf3b9f5_xchange_gradient_pk6qkf.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
