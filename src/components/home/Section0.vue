<template>
<section :style="viewportDimensions">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
            <div class="slogan"><span class="i innovate">i</span>nnovate</div>
            <div class="slogan right"><span class="i involve">i</span>nvolve</div>
            <div class="slogan"><span class="i inspire">i</span>nspire</div>
            <p class="catch-phrase">Catch Phrase - You Can’t Keep This Empty!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="vertical-line"></div>
</section>
</template>

<script>

export default {
  name: 'Section0',
  props: ['viewportDimensions'],
  data () {
    return {
      intro1: require('@/assets/img/Feynman.svg'),
      intro2: 'https://prismic-io.s3.amazonaws.com/risidio-journal/60b4d16b-c4f4-463e-9d4f-34baa93e2afa_intro-hi-res.mp4'
    }
  },
  methods: {
    hoverOver: function (img, ev) {
      ev.currentTarget.src = img.light
    },
    hoverOut: function (img, ev) {
      ev.currentTarget.src = img.dark
    }
  },
  computed: {
    section () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
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
.i.innovate{  
  color: #FDA800 ;
}
.i.involve {
  color: #5FBDC1;
}
.i.inspire {
  color: #E9493D;
}
.i:before {
  content: "ı";
  position: absolute; 
  color: #383838;
}
.slogan{
  width: 420px;
  height: 107px;
  font: normal normal bold 88px/107px Montserrat;
  color: #383838;
  text-align: center;
}
.slogan.right{
  text-align: end;
}
.slogan:hover .i:before{
  color: white;
}
.slogan:hover{
  color: white;
}
.catch-phrase {
  font: normal normal 300 17px/20px Montserrat;
  color: white;
  margin-top: 29px;
}

.vertical-line {
  border-left: 0.5px solid rgba(255, 255, 255, 0.5);
  height: 190px;
  width: 0;
  margin: -7rem auto 0;
}

.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
}


@media only screen
  and (min-device-width: 1024px)
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .vertical-line { margin: -18rem auto 0; height: 300px; }
  }

@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1)
  and (orientation: portrait) {
    .vertical-line { margin: -18rem auto 0; height: 300px; }
  }

@media only screen and (max-width: 768px) {
  img { height: 90px; }
}

@media only screen and (max-width: 575px) {
  img { height: 70px; }
  .vertical-line { margin: -10rem auto 0; }
}

@media only screen and (max-width: 375px) {
  .vertical-line { margin: -8rem auto 0; }
  .tagline { font-size: 12px; }
}

@media only screen and (max-width: 320px) {
  img { height: 60px; }
  .vertical-line { margin: -7rem auto 0; }
  .tagline { font-size: 12px; }

}
</style>
