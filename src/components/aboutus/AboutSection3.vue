<template>
<section class="bg-white" v-if="content" id="CSR-section">
  <div class="d-flex align-items-center flex-column py-5" :style="viewportDimensions">
    <div class="my-auto">
      <h1 class="mb-3 text-center blurb2">{{content.s4title1[0].text}}</h1>
      <h2 class="mb-5 text-center blurb2">{{content.s4title2[0].text}}</h2>
      <div class="d-flex flex-column align-items-center my-auto">
        <p>{{content.s4description1[0].text}}</p>
        <p>{{content.s4description1[1].text}}</p>
        <img :src="content.s4image.url" alt=""/>
        <p>{{content.s4description1[2].text}}</p>
        <p class="font-weight-bold">{{content.s4description1[3].text}}</p>
        <div class="d-flex justify-content-between align-items-center links flex-column flex-lg-row ">
          <router-link to="/projects/x-change">Risidio Xchange</router-link>
          <a href="https://thisisnumberone.com/">This is #1</a>
          <a href="https://stacks.org/">Stacks Foundation</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AboutSection3',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  mounted () {
    const section = this.$router.currentRoute.hash.replace('#', '')
    if (section) {
      this.$nextTick(() => window.document.getElementById(section).scrollIntoView())
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
section {
  border-top: 2px solid #f5f5f5;
}
.content-wrap h1 {
  white-space: nowrap;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
}
.content-wrap h2 {
  white-space: nowrap;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  color: #000000;
}
p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
  width: 50%;
}
.links a:not(:last-child) {
  margin-bottom: 10px;
}
img {
  max-width: 75%;
  max-height: 500px;
  margin: 1rem 0 2rem 0;
}
.links {
   width: 50%;
}
@media only screen and (max-width: 768px) {
  .content-wrap h2 {
    width: 75%;
  }
  p {
    width: 75%;
  }
}
</style>
