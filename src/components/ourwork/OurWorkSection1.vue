<template>
  <div>
    <div>
      <b-modal id="modal-1" hide-footer class="video-modal" title="Indigenous Video" size="xl">
        <video class="home-video" :src="video.url" ref="video" preload="auto" alt="indigenous" v-on:change="playOrPause()"/>
        <div v-show="videoState" @click="videoState = false" class=" play-pause fade-in-anim">
          <img class="play" src="@/assets/img/pause-button.svg" alt="play-button"/>
        </div>
        <div v-show="!videoState" @click="videoState = true" class="play play-pause fade-in">
          <img class="play" src="@/assets/img/play-button.svg" alt="pause-button"/>
          <!-- <h2 class="video-text"> Exploring what it means to be indigenous</h2> -->
        </div>
      </b-modal>
    </div>
    <div id="ourwork-section1" class="bg-white">
      <section v-for="(project, index) of content.projects" :key="index" class="item-container">
        <img :src="project.image.url" alt="" class="image"/>
        <h2 class="header">{{ project.title[0].text }}</h2>
        <p class="text">{{ project.text[0].text }}</p>
        <!-- <a  class="find">Fint out more</a> -->
        <b v-if="project.title[0].text === 'Marketplace' || project.title[0].text === 'Studio'" class="try">Coming Soon</b>
        <a class="try" v-else-if="project.title[0].text === 'Dreaming NFT'" v-b-modal.modal-1> Find Out More </a>
        <a target="_blank" v-else :href="project.link[0].text" class="try">Find Out More</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurWorkSection1',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
      videoState: false
    }
  },
  watch: {
    'videoState' () {
      const video = document.getElementsByClassName('home-video')[0]
      console.log(video)
      if (this.videoState) {
        video.setAttribute('controls', 'controls')
        video.play()
      }
      if (!this.videoState) {
        if (video.hasAttribute('controls')) video.removeAttribute('controls', 'controls')
        video.pause()
        //
      }
    }
  },
  methods: {
    playPause (e) {
      /* eslint-disable */
      const $self = this
			const video = document.getElementsByClassName('home-video')[0]
      video.addEventListener('pause', () => {
        $self.videoState = false
      });
      video.addEventListener('play', () => {
        $self.videoState = true
      });
    }
  },
  mounted () {
    const $self = this
    window.addEventListener('click', function (e) {
      $self.playPause(e)
    })
  },
  computed: {
    video () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.video[0].video1
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-white{
  min-height: 800px;
}
#ourwork-section1 {
  display: grid;
  padding: 100px 15px;
  max-width: 990px;
  margin: 0 auto;
  width: 100%;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: repeat(auto-fill, minmax(217px, max-content));
  justify-content: center;
  gap: 80px 30px;
}
.item-container {
  width: 217px;
}
.item-container img {
  width: 217px;
  height: 287px;
}
.item-container p {
  width: 218px;
  text-align: left;
  font: normal normal 300 11px/18px Montserrat;
  letter-spacing: 0px;
  opacity: 1;
}
.item-container h2 {
  text-align: left;
  font: normal normal 200 28px/34px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  margin-top: 14px;
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
  margin-right: 10px;
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
}
.try-noEffect {
  width: 59px;
  height: 14px;
  font-size: 11px;
  text-align: left;
  font: normal normal bold 11px/14px Montserrat;
  letter-spacing: 0px;
  color: #F9B807;
  text-transform: capitalize;
  opacity: 1;
}
.video-modal{
  position: relative;
}
.play{
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
.video-text{
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
@keyframes animate-button{
	0%{
		opacity: 100%;
	}
	100% {
		opacity: 0%;
	}
}
</style>
