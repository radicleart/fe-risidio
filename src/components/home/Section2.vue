<template>
  <section id="section2" class="section2 text-white d-flex flex-column justify-content-center"
  :style="bannerImage" style="min-height: 80vh">
    <b-container class="text-center pt-5" container-fluid>
      <b-row align-h="center">
        <b-col md="8" sm="10" align-self="center">
          <prismic-rich-text class="main-content" :field="section2.content"/>
           <!-- <svg class="svg" src="https://risidio-journal.cdn.prismic.io/risidio-journal/ae6644d6-0cfc-403d-aab8-a7252e5cc8b6_Group+17126.svg" width="100%" height="1100"></svg>-->
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center py-5">
      <div><a href="https://ruma.risidio.com"><button class="mr-4">Try now!</button></a></div>
      <div><a href="/marketplace"><button class="button1">Find out more</button></a></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section2',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section2 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section2[0]
    },
    bannerImage () {
      return {
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.section2.banner.url})`,
        'background-position': 'center',
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style scoped>
.main-content >>> h4 {
  margin-bottom: 30px;
}
.main-content >>> p {
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
</style>
