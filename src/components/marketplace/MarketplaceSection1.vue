<template>
  <section class="bg-white">
    <div class="container1">
      <div class="gallery">
      <img src="../../assets/img/marketplace.png" alt="placeholder" class="image"/>
      <h1 class="header">Marketplace</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/indige.png" alt="placeholder" class="image"/>
      <h1 class="header">Indige</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/thisisnumberone.png" alt="placeholder" class="image"/>
      <h1 class="header">#1</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/rpay.png" alt="placeholder" class="image"/>
      <h1 class="header">rPay</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    </div>
    <div class="container2">
    <div class="gallery">
      <img src="../../assets/img/thisisnumberone.png" alt="placeholder" class="image"/>
      <h1 class="header">RUMA</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/thisisnumberone.png" alt="placeholder" class="image"/>
      <h1 class="header">Novum Design</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/thisisnumberone.png" alt="placeholder" class="image"/>
      <h1 class="header">PROM</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    <div class="gallery">
      <img src="../../assets/img/thisisnumberone.png" alt="placeholder" class="image"/>
      <h1 class="header">Project Name</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <a class="find">Fint out more</a>
      <a class="try">Try It Now</a>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MarketplaceSection1',
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
.container1{
  max-width: 1100PX;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 100px;
}
.container2{
  max-width: 1100PX;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 100px;

}
.gallery
{
  width: 220px;
}
.gallery img{
width: 217px;
height: 287px;
opacity: 1;
background: black;
}
.gallery p{
width: 218px;
height: 42px;
text-align: left;
font: normal normal 300 11px/18px Montserrat;
letter-spacing: 0px;
opacity: 1;
}
.gallery h1{
  text-align: left;
  font-size: 28px;
  font-weight: 300;
  width: 218px;
  height: 34px;
  margin-top: 10px;
}
.gallery a{
  margin-top: -5px;
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
  margin-left: 10px;
}
</style>
