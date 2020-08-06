<template>
<section class="bg-lighter" v-if="content" :style="viewportDimensions">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center">
      <div class="main-heading"><h1 class="text-black">{{content.section2_title[0].text}}</h1></div>
      <div class="row content-container">
        <div class="col-lg-4 col-md-12 mb-5 mx-auto px-md-5 px-sm-0 text-black w-75" v-for="(item, index) of content.group2" :key="index">
          <div v-lazyload class="whatsit" :class="'bg-' + getBgClass(index)"><img class="p-3" :data-url="features[index]" alt="icon"/></div>
          <h2 class="text-center blurb2">{{item.title[0].text}}</h2>
          <p class="text-center blurb2">{{item.description[0].text}}</p>
        </div>
      </div>
      <div class="my-5 d-flex justify-content-center">
        <button class="btn-services text-black"><router-link class="more-text" to='/aboutus'>{{content.section2_link[0].text}}</router-link></button>
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
        require('@/assets/img/xd/bitcoin.svg'),
        require('@/assets/img/xd/report.svg'),
        require('@/assets/img/xd/Page-1.svg')
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
}
.more-text {
  text-align: center;
  font-size: 11px;
  font-weight: 900;
  color: #5FBDC1;
  text-transform: capitalize;
  opacity: 1;
}
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  opacity: 1;
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
  opacity: 1;
}

@media only screen and (max-width:991px) {
  .content-container {
    width: 70%;
    margin: 0 auto;
  }
}

@media only screen and (max-width:414px) {
  .content-container {
    width: 100%;
  }
}
</style>
