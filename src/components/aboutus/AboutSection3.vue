<template>
    <section class="bg-lighter">
        <div class="header-title">
          <h2>Discover Our Services</h2>
        </div>
        <div class="about">
          <section class="aboutinfo" v-for="(item, index) in content.section4" :key="index">
            <img :src="item.image.url" alt="" class="image"/>
              <h3 class="title">{{ item.title[0].text }}</h3>
              <p class="text">{{ item.text[0].text }}</p>
          </section>
        </div>
        <div>
          <button class="button mx-auto"><a href="/contact">Interested? Get In Touch</a></button>
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
  methods: {
  },
  computed: {
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
.bg-lighter {
    min-height: 800px;
    padding: 130px 15px;
    text-align: center;
}
.about {
  max-width: 1100px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.aboutinfo {
  text-align: center;
  margin-top: 85px;
}
.aboutinfo p {
  max-width: 300px;
}
.image {
  width: 72px;
  height: 72px;
}
.title {
  font-weight: 300;
  text-align: center;
  font: normal normal 200 35px/43px Montserrat;
  margin-top: 10px;
  margin-bottom: 16px;
}
.text {
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  font: normal normal 300 12px/18px Montserrat;
}
.header-title {
  text-align: center;
  font-weight:1000;
  font-size: 30px;
}
.header-title h2 {
  font-weight:600;
  font-size: 30px;
}
.button {
  width: 224px;
  height: 43px;
  background: rgba(95, 190, 193, 0.15);
  border-radius: 22px;
  color: #5FBDC1;
  font: normal normal bold 11px/14px Montserrat;
}
.button a{
  color: rgba(95, 189, 193, 1);
  font-weight: 700;
  font: normal normal bold 11px/14px Montserrat;
}
@media only screen and (max-width: 1000px) {
  .about {
    flex-direction: column;
  }
  .aboutinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .aboutinfo:not(:first-child) {
    margin-top: 30px;
  }
  .aboutinfo:last-child {
    margin-bottom: 20px;
  }
}
</style>
