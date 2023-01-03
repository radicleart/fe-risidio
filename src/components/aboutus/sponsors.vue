<template>
  <div class="container">
    <div class="title">
      <h2>Our Sponsors</h2>
    </div>

    <div class="sponsors">
      <div class="sponsor-border">
        <img alt="" src="../../assets/img/dell.png" />
      </div>
      <div class="sponsor-border">
        <img alt="" src="../../assets/img/native.png" />
      </div>
      <div class="sponsor-border">
        <img alt="" src="../../assets/img/stacks.png" />
      </div>
      <div class="sponsor-border">
        <img alt="" src="../../assets/img/investments.png" />
      </div>
      <div class="sponsor-border">
        <img alt="" src="../../assets/img/sbx.png" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
export default {
  name: "sponsors",
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1150px;
  margin: 0 auto;
}
.title {
  text-align: start;
  margin-top: 7rem;
  margin-bottom: 4rem;
}
.sponsors {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sponsor-border {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #2c3e50;

    img {
      max-width: 100%;
      max-width: 100%;
    }
  }
}
</style>
