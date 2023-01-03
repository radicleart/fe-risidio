<template>
  <section id="homesection2" class="home-section2">
    <div>
      <b-modal
        id="modal-1"
        hide-footer
        class="video-modal"
        title="Indigenous Video"
        size="xl"
      >
        <video
          class="home-video"
          :src="video.url"
          ref="video"
          preload="auto"
          alt="indigenous"
          v-on:change="playOrPause()"
        />
        <div
          v-show="videoState"
          @click="videoState = false"
          class="play-pause fade-in-anim"
        >
          <img
            class="play"
            src="@/assets/img/pause-button.svg"
            alt="play-button"
          />
        </div>
        <div
          v-show="!videoState"
          @click="videoState = true"
          class="play play-pause fade-in"
        >
          <img
            class="play"
            src="@/assets/img/play-button.svg"
            alt="pause-button"
          />
          <!-- <h2 class="video-text"> Exploring what it means to be indigenous</h2> -->
        </div>
      </b-modal>
    </div>
    <div class="headline">What We Do</div>
    <h2 class="main-heading">Discover Our Projects</h2>
    <div class="vueSlideContainer galleryContainer what-we-do-slider">
      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(slide, index) of slides"
            :key="index"
          >
            <section class="container">
              <div class="imageContainer">
                <img :src="slide.image.url" alt="" />
              </div>
              <div class="textContainer">
                <h3>{{ slide.title[0].text }}</h3>
                <p>{{ slide.content[0].text }}</p>
                <div>
                  <a
                    class="more"
                    v-if="
                      slide.title[0].text === 'Risidio Marketplace' ||
                      slide.title[0].text === 'Studio'
                    "
                    >Coming Soon</a
                  >
                  <a
                    class="more"
                    v-else-if="slide.title[0].text === 'Dreaming NFT'"
                    v-b-modal.modal-1
                  >
                    See Video</a
                  >
                  <a
                    target="_blank"
                    class="more"
                    v-else
                    :href="slide.link[0].text"
                    >Find Out More</a
                  >
                  <router-link class="all" to="/our-work"
                    >See All Projects</router-link
                  >
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="swiper-button-prev">
          <img src="@/assets/img/arrow-left.png" alt="Left Arrow" />
        </div>
        <div class="swiper-button-next">
          <img src="@/assets/img/arrow-right.png" alt="Right Arrow" />
        </div>
        <div class="swiper-pagination">
          <span
            class="swiper-pagination-bullet swiper-pagination-clickable"
          ></span>
          <span
            class="swiper-pagination-bullet swiper-pagination-clickable"
          ></span>
          <span
            class="swiper-pagination-bullet swiper-pagination-clickable"
          ></span>
          <span
            class="swiper-pagination-bullet swiper-pagination-clickable"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/*eslint-disable */
import Swiper, { Navigation, Pagination, Thumbs } from "swiper";
import "@/assets/scss/swiper-bundle.css";

export default {
  name: "Section2",
  props: ["viewportDimensions"],
  data() {
    return {
      showArrow: true,
      touchableSlide: false,
      videoState: false,
      controls: true,
      slide: [
        {
          id: "1",
          text: "Upload Your Item",
        },
        {
          id: "2",
          text: "Mint the Bitcoin",
        },
        {
          id: "3",
          text: "Mint the Bitcoin",
        },
      ],
    };
  },

  computed: {
    slides() {
      const content = this.$store.getters["contentStore/getHomepage"];
      return content.section2;
    },
    video() {
      const content = this.$store.getters["contentStore/getHomepage"];
      return content.video[0].video1;
    },
  },
  watch: {
    videoState() {
      const video = document.getElementsByClassName("home-video")[0];
      // console.log(video);
      if (this.videoState) {
        video.setAttribute("controls", "controls");
        video.play();
      }
      if (!this.videoState) {
        if (video.hasAttribute("controls"))
          video.removeAttribute("controls", "controls");
        video.pause();
        //
      }
    },
  },
  methods: {
    resize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 500) {
        this.touchableSlide = true;
      } else {
        this.touchableSlide = false;
      }
    },
    playPause(e) {
      const $self = this;
      const video = document.getElementsByClassName("home-video")[0];
      video.addEventListener("pause", (event) => {
        $self.videoState = false;
      });
      video.addEventListener("play", (event) => {
        $self.videoState = true;
      });
    },
  },
  created() {
    window.addEventListener("resize", this.resize());
  },
  mounted() {
    const $self = this;
    window.addEventListener("click", function (e) {
      $self.playPause(e);
    });
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Thumbs],
      // Optional parameters
      loop: true,
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 150,
      scrollbar: { draggable: true },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        bulletActiveClass: "swiper-pagination-bullet-active",
        bulletClass: "swiper-pagination-bullet",
        bulletElement: "span",
        clickableClass: "swiper-pagination-clickable",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style scoped lang="scss">
button {
  height: auto;
  width: auto;
}
.swiper-pagination .swiper-pagination-bullet {
  padding: 6px;
}
.video-modal {
  position: relative;
}
.play {
  margin-left: auto;
}
.home-video {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.play-pause {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.video-text {
  text-align: center;
  color: white;
  font-size: 30px;
}
.fade-in-anim {
  animation: 1.5s linear;
  animation-name: animate-button;
  animation-fill-mode: forwards;
  // opacity: 100%;
}
@keyframes animate-button {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
.arrow2 {
  transform: rotate(180deg);
}
.swiper-button-prev img {
  max-width: 60px;
}
.swiper-button-next img {
  max-width: 60px;
}
.swiper-pagination-bullet {
  padding: 6px;
}
.swiper-pagination-bullet-active {
  background-color: #5ebcc0;
}
.swiper-button-next:after {
  content: none;
}
.swiper-button-prev:after {
  content: none;
}
.swiper-button-prev {
  left: 30px !important;
  right: auto;
}
.swiper-button-next {
  right: 30px !important;
  left: auto;
}
.swiper {
  height: 400px;
  max-width: 1200px;
}
.headline {
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0px;
}
.main-content >>> p {
  text-align: center;
}
.home-section2 {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 146px;
}
.home-section2 .main-heading {
  font: normal normal 200 36px/44px Montserrat;
  letter-spacing: 0px;
  text-transform: capitalize;
  white-space: normal;
}
.what-we-do-slider {
  width: 120%;
}
.more {
  margin-right: 35px;
  font: normal normal bold 12px/15px Montserrat;
  color: #63037e;
  cursor: pointer;
}
.all {
  font: normal normal bold 12px/15px Montserrat;
  color: #000000;
}
/* button {
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}
button:hover {
  color: #5FBDC1;
} */

.button1 {
  background: rgb(255, 255, 255, 0.2) 0% 0% no-repeat padding-box;
  border: none;
}
.button1:hover {
  background: white 0% 0% no-repeat padding-box;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.imageContainer {
  width: 200px;
}
.imageContainer img {
  width: 100%;
}
.textContainer {
  max-width: 250px;
  width: 100%;
  margin-left: 50px;
}
.textContainer h3 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0px;
}
.textContainer p {
  font: normal normal 300 14px/18px Montserrat;
}
.textContainer div {
  margin-top: 40px;
}
.swiper-pagination-bullet {
  padding: 6px;
}
@media only screen and (max-width: 2200px) {
  .swiper {
    padding: 0 0em;
  }
}
@media only screen and (max-width: 1900px) {
  .swiper {
    padding: 0 0em;
  }
}
@media only screen and (max-width: 1300px) {
  .swiper {
    padding: 0 0em;
  }
}
@media only screen and (max-width: 1100px) {
  .swiper {
    padding: 0 0em;
  }
}
@media only screen and (max-width: 930px) {
  .swiper {
    padding: 0;
  }
  .textContainer {
    margin-left: 20px;
  }
  .what-we-do-slider {
    width: 140%;
  }
}
@media (max-width: 808px) {
  .what-we-do-slider {
    width: 150%;
  }
  .textContainer {
    max-width: 223px;
  }
  .imageContainer {
    max-width: 170px;
  }
  .more {
    margin-right: 35px;
  }
}
@media only screen and (max-width: 767px) {
  .swiper {
    padding: 0 0em;
    height: 520px;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
  }
  .what-we-do-slider {
    width: 100%;
  }
  #homesection2 {
    padding: 100px 0 200px;
  }
  .imageContainer {
    max-width: 150px;
  }
  .imageContainer img {
    width: 100%;
  }
  .textContainer div {
    margin-top: 20px;
  }
  .swiper >>> .container {
    height: auto;
    flex-direction: column;
  }
  .textContainer {
    width: 246px;
    margin-top: 20px;
    margin-left: 50px;
    height: auto;
  }
  .textContainer h3 {
    text-align: center;
  }
  .textContainer p {
    text-align: center;
  }
  .textContainer div {
    display: flex;
    justify-content: space-between;
  }
  .more {
    margin-right: 0;
  }
}
@media only screen and (max-width: 650px) {
  .swiper {
    padding: 0 7em;
  }
  .textContainer {
    margin-left: 0;
  }
  .swiper-pagination {
    padding-top: 20px;
  }
  .container {
    height: 75%;
    flex-direction: column;
    flex-wrap: nowrap;
  }
}
@media only screen and (max-width: 550px) {
  .swiper {
    padding: 0 6em;
  }
}
@media only screen and (max-width: 500px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
}
@media only screen and (max-width: 450px) {
  .home-section2 .main-heading {
    font-size: 28px;
    padding: 0 15px;
    text-align: center;
  }
  .container {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .imageContainer,
  .textContainer {
    width: 200px;
  }
  .home-section2 {
    gap: 0;
  }
  .swiper {
    padding: 25px 13px;
    height: 550px;
  }
}
@media only screen and (min-width: 1678px) {
  .what-we-do-slider {
    width: 100%;
  }
}
</style>
