<template>
  <section class="bg-lighter">
    <div class="mainheader">
      <h1>Latest Articles Written By Our Team</h1>
    </div>
    <div class="container">
      <div class="gallery">
      <img src="../../assets/img/articles1.png" alt="placeholder" class="image"/>
      <a class="date">10 Feb 20</a>
      <h1 class="header">User Owned Data And Web 3.0</h1>
      <p class="text">The creaking foundations of internet are groaning under the strain of centrally owned user data.</p>
      </div>
    <div class="gallery">
      <img src="../../assets/img/articles2.png" alt="placeholder" class="image"/>
      <a class="date">20 Jan 20</a>
      <h1 class="header">Art On The Block</h1>
      <p class="text">Art and technology seem to be clutching hands on a rollercoaster ride like never before. Several art on blockchain projects have sprung up over the past year and this article</p>
      </div>
    <div class="gallery">
      <img src="../../assets/img/articles3.png" alt="placeholder" class="image"/>
      <a class="date">10 Jan 20</a>
      <h1 class="header">Lorem ipsum sint</h1>
      <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MarketplaceSection2',
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
}
.mainheader h1{
  padding-top: 100px;
  font-size: 17px;
}
.container{
  max-width: 1100PX;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 100px;
}
.gallery
{
  width: 320px;
}
.gallery img{
width: 310px;
height: 200px;
opacity: 1;
background: black;
}
.gallery p{
width: 310px;
height: 42px;
text-align: left;
font: normal normal 300 11px/18px Montserrat;
letter-spacing: 0px;
opacity: 1;
}
.gallery h1{
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  width: 320px;
  height: 23px;
  margin-top: 10px;
}
.date{
  margin-top: 10px;
  width: 280px;
  height: 17px;
  text-align: left;
  font: normal normal 300 10px/19px Montserrat;
  letter-spacing: 0px;
  color: #E9493D;
  opacity: 1;
}
</style>
