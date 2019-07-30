<template>
  <swiper ref="mySwiper" :options="swiperOption" @ready="debug" @slideChange="slideChange">
    <swiper-slide v-for="(slide, i) in swiperSlides" :key="slide">
      <component :is="slide" @next="next" v-if="index === i" />
    </swiper-slide>
  </swiper>
</template>

<script>
import guard from "./guard.vue";
import heartbeat from "./heartbeat.vue";
import firstCall from "./first-call.vue";
import firstMovie from "./first-movie.vue";

export default {
  components: {
    guard,
    heartbeat,
    firstCall,
    firstMovie
  },
  data() {
    return {
      swiperSlides: ["guard", "firstCall", "firstMovie", "heartbeat"],
      index: 0,
      maxIndex: 0,
      swiperOption: {
        direction: "vertical",
        allowSlideNext: false
      },
      debugIndex: 2
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    isDebuging() {
      return process.env.NODE_ENV === "development";
    }
  },
  methods: {
    next() {
      if (this.swiper.activeIndex === this.maxIndex) {
        this.maxIndex++;
      }
      this.swiper.allowSlideNext = true;
    },
    slideChange() {
      this.index = this.swiper.activeIndex;
      this.swiper.allowSlideNext = this.index !== this.maxIndex;
    },
    debug() {
      if (this.isDebuging && this.debugIndex) {
        this.swiper.allowSlideNext = true;
        this.swiper.slideTo(this.debugIndex);
        this.swiper.allowSlideNext = false;
      }
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.swiper-container {
  height: 100%;
}
body {
  background-color: #252c41;
  color: #fff;
  font-size: 1rem;
  line-height: 1.4;
}
</style>
