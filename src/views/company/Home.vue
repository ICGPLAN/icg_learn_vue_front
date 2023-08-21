<template>
  <div class="hero-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block">
            <h1>{{ $t(textArr[0].t) }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="about" id="about">
    <div class="container">
      <div class="row">

        <div class="title text-center">
          <h2 v-if="this.$i18n.locale !== 'ja'">{{ $t(textArr[1].t) }}&nbsp;<span class="color">{{ $t(textArr[0].t)
          }}</span></h2>
          <h2 v-else><span class="color">{{ $t(textArr[0].t) }}</span>&nbsp;{{ $t(textArr[1].t) }}</h2>
          <div class="border_home"></div>
          <p>{{ $t(textArr[2].t) }}</p>
        </div>

        <div class="col-md-6">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" style="width:auto;">
              <div class="carousel-item active">
                <img src="@/assets/img/home/02.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/home/call-to-action-bg.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <h4>赴日前的自我审查</h4>
          <ul class="feature-list">
            <li>为什么赴日？</li>
            <li>家里人同意吗？</li>
            <li>想赴日是因为国内混不下去了吗?</li>
            <li>会不会水土不服而半途而废？</li>
          </ul>
          <br />
          <br />
          <a href="#" class="btn btn-main mt-20">Learn More</a>
        </div>
      </div>
    </div>
  </div>

  <div class="call-to-action-2 parallax-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2>STRAWBERRY PLAN</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/css/views/company/home.css'
export default {
  name: 'Home',
  data: function () {
    return {
      textArr: [{ t: 'home.text0000' },
      { t: 'home.text0001' },
      { t: 'home.text0002' },
      ],
    };
  },
  created() {
  },
  mounted() {
  },
}

</script>
<style></style>