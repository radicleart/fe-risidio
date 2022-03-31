<template>
    <section class="bg-lighter">
        <div class="header-title">
             <h2 > Discover Our Services</h2>
            </div>
            <div class="about">
    <div>
        <div>
            <div class="aboutinfo">
             <img src="../../assets/img/service.png" alt="placeholder" class="image"/>
                <p class="title"> Design</p>
                <p class="text">We have the network, skills and experience to grow a team from zero to production ready. Whether you need secondary or primary research to support a blockchain business plan or you’re ready for a full blown dev team we can help.</p>
            </div>
          </div>
      </div>
    <div>
          <div>
            <div class="aboutinfo">
             <img src="../../assets/img/services1.png" alt="placeholder" class="image"/>
                <p class="title"> Development</p>
                <p class="text">Our product development team are constantly on the lookout for new integrations and directions for our core offerings. We build modular web components and micro-services from the ground up.</p>
            </div>
          </div>
      </div>
      <div>
          <div>
            <div class="aboutinfo">
             <img src="../../assets/img/services2.png" alt="placeholder" class="image"/>
                <p class="title"> Marketing</p>
                <p class="text">While blockchain opens the door to entirely new business cases it can also be a complex and daunting space. We can help sort the wheat from the chaff and navigate problems like scalability that will underpin the success of your endeavours with blockchain technology.</p>
            </div>
          </div>
      </div>
      </div>
      <div>
          <button class="button">Interested ? Get In Touch</button>
      </div>
    </section>
</template>

<script>
export default {
  name: 'AboutSection3',
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
    padding: 10rem 1rem;
    text-align: center;
}

.about{
   max-width: 1500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .aboutinfo{
    position: relative;
    flex: 0 1 300px;
    padding: 35px 20px;
    text-align: center;
    margin-top: 150px;
    }
    .aboutinfo p{
      max-width: 350px;
      margin-left: auto;
      margin-right: auto;
    }
    .image{
    position: absolute;
    top: 10px;
    right: 0; left: 0;
    margin: auto;
    width: 72px;
    height: 72px;
  }
  .title{
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    margin-top: 90px;
  }
  .text{
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
  .header-title{
      text-align: center;
      font-weight:1000;
      font-size: 30px;
    }
  .header-title h2{
      font-weight:600;
      font-size: 30px;
      }
  .button{
     width: 224px;
     height: 43px;
     background: #5FBDC1 0% 0% no-repeat padding-box;
     border-radius: 22px;
     opacity: 0.35;
     color:black;
     font-size: 14px;
     }
  </style>
