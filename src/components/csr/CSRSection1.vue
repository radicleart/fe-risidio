<template>
    <section class="bg-lighter">
        <div class="header-title">
          <div>
          <h1> We Care</h1>
          </div>
            <div> <h2 > Our Focuses</h2>
            </div>
            </div>
            <div class="sustainability">
    <div>
        <div>
            <div class="csrinfo">
             <img src="../../assets/img/service.png" alt="placeholder" class="image"/>
                <p class="title"> Environment</p>
                <p class="text">We aim to tackle issues of digital and ecological pollution alongside our habitat and carbon sink regeneration work, with the overall aim to reduce Earth’s carbon footprint.</p>
            </div>
          </div>
      </div>
    <div>
          <div>
            <div class="csrinfo">
             <img src="../../assets/img/services1.png" alt="placeholder" class="image"/>
                <p class="title"> Biodiversity</p>
                <p class="text">Restore biodiversity and conserve natural habitats. The work we carry out as part of our Sustainable UK Agriculture initiative will foster.</p>
            </div>
          </div>
      </div>
      <div>
          <div>
            <div class="csrinfo">
             <img src="../../assets/img/services2.png" alt="placeholder" class="image"/>
                <p class="title"> Socioeconomy</p>
                <p class="text">Socioeconomic inclusion by giving opportunities to creative actors and end-users to utilise a decentralised way of working and its advantages. New initiatives (mention indigenous projects).</p>
            </div>
          </div>
      </div>
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

.sustainability{
   max-width: 1500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: -20px;
  }
  .csrinfo{
    position: relative;
    flex: 0 1 300px;
    padding: 35px 20px;
    text-align: center;
    margin-top: 150px;
    }
    .csrinfo p{
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
      margin-top: -40px;
      gap: 20px;

    }
  .header-title h1{
      font-weight:600;
      font-size: 20px;
      }
  .header-title h2{
      font-weight: 200;
      font-size: 36px;
      margin-top: 40px;
      }
      </style>
