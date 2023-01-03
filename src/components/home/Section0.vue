<template>
  <div :style="viewportDimensions">
    <div class="d-flex justify-content-center">
      <div
        class="d-flex align-items-center flex-column"
        :style="viewportDimensions"
      >
        <div class="my-auto text-center">
          <div class="mb-auto d-flex align-items-center flex-column">
            <transition appear appear-active-class="fade-enter-active-first">
              <div
                v-scroll-to="{ element: '#slider', duration: 1500 }"
                class="slogan"
                :style="{ transitionDelay: delay }"
              >
                <span class="i innovate">i</span>nnovate
              </div>
            </transition>

            <transition appear appear-active-class="fade-enter-active-second">
              <div
                v-scroll-to="{ element: '#slider', duration: 1500 }"
                class="slogan right"
              >
                <span class="i involve">i</span>nvolve
              </div>
            </transition>

            <transition appear appear-active-class="fade-enter-active-third">
              <div
                v-scroll-to="{ element: '#slider', duration: 1500 }"
                class="slogan"
              >
                <span class="i inspire">i</span>nspire
              </div>
            </transition>
            <p class="catch-phrase">Creating Decentralised Future</p>
          </div>
        </div>
      </div>
    </div>
    <div class="vertical-line"></div>
  </div>
</template>
<!-- eslint-disable quotes -->
<!-- eslint-disable semi -->
<!-- eslint-disable space-before-function-paren -->
<!-- eslint-disable comma-dangle -->
<script>
export default {
  name: "Section0",
  props: ["viewportDimensions"],
  data() {
    return {
      intro1: require("@/assets/img/Feynman.svg"),
      intro2:
        "https://prismic-io.s3.amazonaws.com/risidio-journal/60b4d16b-c4f4-463e-9d4f-34baa93e2afa_intro-hi-res.mp4",
    };
  },
  methods: {
    // slider (n) {
    //   this.$root.$emit('particularSlide', n)
    // }
  },
  computed: {
    section() {
      const content = this.$store.getters["contentStore/getHomepage"];
      return content;
    },
  },
};
</script>

<style scoped>
/*
img {
  width: 100%;
  height: auto;
}
*/
.i.innovate {
  color: #fda800;
}
.i.involve {
  color: #5fbdc1;
}
.i.inspire {
  color: #e9493d;
}
.i:before {
  content: "ı";
  position: absolute;
  color: #383838;
  margin-bottom: 20px;
}

.slogan {
  width: 420px;
  height: 107px;
  font: normal normal bold 88px/107px Montserrat;
  color: #383838;
  text-align: center;
  cursor: pointer;
}
.slogan.right {
  text-align: end;
}
.slogan:hover .i:before {
  color: white;
}
.slogan:hover {
  color: white;
}
.catch-phrase {
  font: normal normal 300 17px/20px Montserrat;
  color: white;
  margin-top: 29px;
  padding: 0 10px;
  text-align: center;
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
  color: #ffffff;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  .vertical-line {
    margin: -18rem auto 0;
    height: 300px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait) {
  .vertical-line {
    margin: -18rem auto 0;
    height: 300px;
  }
}

@media only screen and (max-width: 426px) {
  .slogan {
    width: 350px;
    height: 90px;
    font-size: 70px;
  }
}

@media only screen and (max-width: 374px) {
  .slogan {
    width: 290px;
    height: 90px;
    font-size: 60px;
  }
}

.fade-enter-active-first {
  animation-name: first;
  animation-duration: 3s;
}
.fade-enter-active-second {
  animation-name: second;
  animation-duration: 4s;
}
.fade-enter-active-third {
  animation-name: third;
  animation-duration: 5s;
}
@keyframes first {
  0% {
    opacity: 0.2;
    transform: scale(0.6);
  }
  25% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes second {
  0% {
    opacity: 0.2;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes third {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
