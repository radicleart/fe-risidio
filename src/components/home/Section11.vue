<template>
  <section id="section11" class="section11 text-white" style="min-height: 80vh">
    <b-container class="text-center" style="padding-top: 15vh" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <prismic-rich-text class="main-content" :field="section11.content"/>
           <!-- <svg class="svg" src="https://risidio-journal.cdn.prismic.io/risidio-journal/ae6644d6-0cfc-403d-aab8-a7252e5cc8b6_Group+17126.svg" width="100%" height="1100"></svg>-->
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center py-5">
      <div><a href="https://ruma.risidio.com"><button class="button1">Try now!</button></a></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section11',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section11 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section11[0]
    }
  }
}
</script>

<style scoped>
.main-content >>> h2:nth-child(3) {
  margin-bottom: 40px;
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

.section11 {
  background: url('https://risidio-journal.cdn.prismic.io/risidio-journal/3a1462cc-ce84-4e1d-a25b-d333a7f4a581_Ruma_bg_jthkwk.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
