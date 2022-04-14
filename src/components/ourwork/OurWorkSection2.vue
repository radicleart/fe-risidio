<template>
  <section class="bg-lighter">
    <div class="mainheader">
      <h1>Latest Articles Written By Our Team</h1>
    </div>
    <div class="items-container">
      <div v-for="(article, index) of content.articles" :key="index" class="item-container">
        <a :href="article.link[0].text">
          <img :src="article.image.url" alt="placeholder" class="image"/>
          <span class="date">{{ article.date[0].text }}</span>
          <h1 class="header">{{ article.title[0].text }}</h1>
          <p class="text">{{ article.text[0].text }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurWorkSection2',
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
.bg-lighter{
  min-height: 700px;
  padding: 100px 0;
}
.mainheader h1{
  font-size: 17px;
}
.items-container {
    display: grid;
    padding: 80px 15px 0;
    max-width: 970px;
    margin: 0 auto;
    width: 100%;
    grid-template-rows: repeat(1, max-content);
    grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
    justify-content: center;
    gap: 80px 50px;
}
.item-container {
  width: 280px;
}
.item-container img {
  width: 280px;
  height: 200px;
  margin-bottom: 5px;
}
.item-container p {
  text-align: left;
  font: normal normal 300 11px/18px Montserrat;
  letter-spacing: 0px;
  margin-bottom: 0;
  color: #000;
}
.item-container h1 {
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
  color: #000;
}
.item-container a:hover {
  color: #000;
}
.date {
  text-align: left;
  font: normal normal 300 10px/19px Montserrat;
  letter-spacing: 0px;
  color: #E9493D;
}
</style>
