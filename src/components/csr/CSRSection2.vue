<template>
    <section id="csr-section2" class="bg-lighter">
        <div class="header-title">
          <div>
          <h2> We Care</h2>
          </div>
            <div> <h3>Sustainable Development Goals</h3>
            </div>
            </div>
            <div>
              <p class="title">Roadmap and Targets</p>
              <p class="text">EARTH DAY – APRIL 22, 2022</p>
              <p class="text" style="max-width: 500px; margin: 0 auto;">Earth Day 2022 marks the beginning of the rollout of our IndigeNFT Genesis collection. The theme for Earth Day 2022 (‘Invest in our Planet’) calls on business to build a more environmentally and socially conscious future for the Earth, a message strongly aligned with our own values.</p>
            </div>
            <div class="sustainability">
    <div>
        <div>
            <div class="csrinfo">
             <img src="../../assets/img/service.png" alt="" class="image"/>
                <p class="title1"> Governance</p>
                <p class="text">Corporate Social Responsibility is at the heart of Risidio. Our governing ethos involves expanding our existing ecosystem of partners to establish an environmentally and socially conscious network.</p>
            </div>
          </div>
      </div>
    <div>
          <div>
            <div class="csrinfo">
             <img src="../../assets/img/services1.png" alt="" class="image"/>
                <p class="title1"> Strategy</p>
                <p class="text">To minimise our carbon footprint, we use Stacks’ Proof-of-Transfer (PoX) blockchain mining mechanism for Bitcoin in our NFT marketplace and support the  <a href="https://www.sustainablebtc.org/" style="color: #E9493D;">Sustainable Bitcoin Standard</a>.</p>
            </div>
          </div>
      </div>
      <div>
          <div>
            <div class="csrinfo">
             <img src="../../assets/img/services2.png" alt="" class="image"/>
                <p class="title1"> Risk Management</p>
                <p class="text">We've conducted and published research into a range of CSR projects <a href="https://medium.com/risidio/fake-art-nfts-and-indigenous-rights-be2d8f32deb8"></a> to highlight the fake indigenous art issue and how NFT technologies can support indigenous communities.</p>
            </div>
          </div>
      </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'CSRSection2',
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
.bg-lighter{
    min-height: 800px;
    padding: 50px 15px;
    text-align: center;
}

.sustainability {
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  flex-direction: row;
}
.csrinfo {
  position: relative;
  flex: 0 1 300px;
  padding: 35px 20px;
  text-align: center;
  margin-top: 90px;
}
.csrinfo p {
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}
.image {
  position: absolute;
  top: 10px;
  right: 0; left: 0;
  margin: auto;
  width: 72px;
  height: 72px;
}
.title {
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin-top: 30px;
}
.title1 {
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin-top: 90px;
}
.text {
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}
.header-title {
  text-align: center;
  gap: 20px;
}
.header-title h2 {
  font-weight:600;
  font-size: 20px;
}
.header-title h3 {
  font-weight: 200;
  font-size: 36px;
  margin-top: 40px;
}
</style>
