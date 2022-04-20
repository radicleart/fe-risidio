<template>
  <section id="our-work-section1" class="bg-white">
    <div v-for="(project, index) of content.projects" :key="index" class="item-container">
      <img :src="project.image.url" alt="placeholder" class="image"/>
      <h1 class="header">{{ project.title[0].text }}</h1>
      <p class="text">{{ project.text[0].text }}</p>
      <!-- <a  class="find">Fint out more</a> -->
      <a v-if="project.title[0].text === 'Marketplace'" class="try">Coming Soon</a>
      <a v-else :href="project.link[0].text" class="try">Find Out More</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurWorkSection1',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.bg-white{
  min-height: 800px;
}
section {
  display: grid;
  padding: 100px 15px;
  max-width: 990px;
  margin: 0 auto;
  width: 100%;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: repeat(auto-fill, minmax(217px, max-content));
  justify-content: center;
  gap: 80px 30px;
}
.item-container {
  width: 217px;
}
.item-container img {
  width: 217px;
  height: 287px;
}
.item-container p {
  width: 218px;
  text-align: left;
  font: normal normal 300 11px/18px Montserrat;
  letter-spacing: 0px;
  opacity: 1;
}
.item-container h1 {
  text-align: left;
  font: normal normal 200 28px/34px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  margin-top: 14px;
}
.find{
  width: 83px;
  height: 14px;
  font-size: 11px;
  text-align: left;
  font: normal normal bold 11px/14px Montserrat;
  letter-spacing: 0px;
  color: #5FBDC1;
  opacity: 1;
  margin-right: 10px;
}
.try{
  width: 59px;
  height: 14px;
  font-size: 11px;
  text-align: left;
  font: normal normal bold 11px/14px Montserrat;
  letter-spacing: 0px;
  color: #F9B807;
  text-transform: capitalize;
  opacity: 1;
}
</style>
