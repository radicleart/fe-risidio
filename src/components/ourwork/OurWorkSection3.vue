<template>
<section class="bg-lighter our-services" v-if="content">
  <div class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <div class="main-heading"><h1 class="text-black">{{content.section3_title[0].text}}</h1></div>
      <div class="row content-container">
        <div class="col-lg-4 col-md-12 mb-5 mx-auto px-md-5 px-sm-0 text-black w-75" v-for="(item, index) of content.section3" :key="index">
          <div class="whatsit" :class="'bg-' + getBgClass(index)"><img class="" :src="features[index]" alt=""/></div>
          <prismic-rich-text class="main-content" :field="item.content"/>
        </div>
      </div>
      <div class="my-5 d-flex justify-content-center">
        <button class="btn-services"><router-link class="more-text" to='/aboutus'>{{content.section3_button[0].text}}</router-link></button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'OurWorkSection3',
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
.main-heading {
  margin: 5rem 0 5rem;
}
.content-container {
  max-width: 1350px;
  margin: 0 1.5rem;
}
.our-services {
  padding: 2.5rem 0;
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
.main-content >>> p {
  text-align: center;
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
