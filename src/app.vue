<template>
  <swiper ref="mySwiper" :options="swiperOption" @ready="debug" @slideChange="slideChange">
    <preloadImgs v-if="index === 0" />
    <swiper-slide v-for="(slide, i) in swiperSlides" :key="slide">
      <component :is="slide" @next="next" v-if="index === i" :debug="isDebuging" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { isDebuging } from "./utils";
import preloadImgs from "./preload-imgs.vue";
import guard from "./guard.vue";
import questions from "./questions.vue";
import heartbeat from "./heartbeat.vue";
import firstCall from "./first-call.vue";
import firstMovie from "./first-movie.vue";
import firstMovieTheater from "./first-movie-theater.vue";
import firstMovieConservation from "./first-movie-conservation.vue";
import toBeContinued from "./to-be-continued.vue";

export default {
  components: {
    preloadImgs,
    guard,
    questions,
    heartbeat,
    firstCall,
    firstMovie,
    firstMovieTheater,
    firstMovieConservation,
    toBeContinued
  },
  data() {
    return {
      swiperSlides: [
        "guard",
        "questions",
        "firstCall",
        "firstMovie",
        "firstMovieConservation",
        "firstMovieTheater",
        "toBeContinued",
        "heartbeat"
      ],
      index: 0,
      maxIndex: 0,
      swiperOption: {
        direction: "vertical",
        allowSlideNext: false
      },
      debugIndex: 1
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    isDebuging() {
      // return false;
      return isDebuging();
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
        this.maxIndex = this.debugIndex;
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
.h100 {
  height: 100%;
}
.pt30 {
  padding-top: 30%;
}
.tc {
  text-align: center;
}
span.animated {
  display: inline-block;
}
</style>
