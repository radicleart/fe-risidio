<template>
<section class="bg-lighter" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center">
      <div class="main-heading"><h1 class="text-black">{{content.section2_title[0].text}}</h1></div>
      <div class="row content-container">
        <div class="col-lg-4 col-md-12 mb-5 mx-auto px-md-5 px-sm-0 text-black w-75" v-for="(item, index) of content.group2" :key="index">
          <div v-lazyload class="whatsit" :class="'bg-' + getBgClass(index)"><img class="" :data-url="features[index]" alt="icon"/></div>
          <h2 class="text-center blurb2">{{item.title[0].text}}</h2>
          <p class="text-center blurb2">{{item.description[0].text}}</p>
        </div>
      </div>
      <div class="my-5 d-flex justify-content-center">
        <button class="btn-services"><router-link class="more-text" to='/aboutus'>{{content.section2_link[0].text}}</router-link></button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section12',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
      features: [
        require('@/assets/img/icons/Chess_figure.svg'),
        require('@/assets/img/icons/Website_development.svg'),
        require('@/assets/img/icons/Magnifying_glass.svg')
      ]
    }
  },
  methods: {
    getBgClass: function (index) {
      if (index === 0) {
        return 'warning'
      } else if (index === 1) {
        return 'info'
      } else {
        return 'danger'
      }
    }
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
.main-heading {
  margin: 5rem 0 5rem;
}
.content-container {
  max-width: 1350px;
  margin: 0 1.5rem;
}
.whatsit {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 0 auto 12px;
  display: flex;
}
.more-text {
  text-align: center;
  font-size: 13px;
  font-weight: 900;
  color: #5FBDC1;
  text-transform: capitalize;
}
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
}
.card-title {
  white-space: nowrap;
}
.card-text {
  min-height: 100px;
}
.card-img-top {
  height: 300px;
}
h1 {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
}
img {
  margin: auto;
}
button:hover {
  background-color: #5FBDC1;
}
button:hover a {
  color: #fff;
}

@media only screen and (max-width:991px) {
  .content-container {
    width: 70%;
    margin: 0 auto;
  }
}

@media only screen and (max-width:425px) {
  .content-container {
    width: 100%;
  }
}
</style>
