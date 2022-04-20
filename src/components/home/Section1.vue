<template>
  <section id="section1">
    <div class="mt-5 d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="d-flex align-items-center flex-column">
        <prismic-rich-text class="main-content my-4 text-white" :field="section1[0].content"/>
        <div class="mb-4 d-flex justify-content-center">
          <div class="mr-2"><button class="about-us"><a href="/aboutus" class="about-text">{{section1[0].link[0].text}}</a></button></div>
          <div class="ml-2"><button><a href="/our-work" class="call-button-text">{{section1[1].link[0].text}}</a></button></div>
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
    section1 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section1
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
.main-content {
  width: 70%;
  text-align: center;
}

@media only screen and (min-width: 767px) {
  .main-content {
    width: 50%;
  }
}

.main-content >>> h1 {
  margin-bottom: 1.5rem;
}
.main-content >>> h2 {
  margin-bottom: 1.5rem;
}
.main-content >>> p {
  text-align: center;
}
.about-us {
  background: #5FBDC1 0% 0% no-repeat padding-box;
}
.about-us:hover {
  background: white;
}
.about-us:hover .about-text{
  color: #5FBDC1;
}
.about-text {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}

@media only screen and (min-width:769px) {
  .main-content >>> p { font-size: 20px; }
}
</style>
