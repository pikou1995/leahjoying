<template>
  <swiper ref="mySwiper" :options="swiperOption" @slideChange="slideChange">
    <swiper-slide>
      <guard @next="next" />
    </swiper-slide>
    <swiper-slide>
      <firstCall @next="next" v-if="1 <= index" />
    </swiper-slide>
    <swiper-slide>
      <firstMovie @next="next" v-if="2 <= index" />
    </swiper-slide>
    <swiper-slide>
      <heartbeat v-if="3 <= index" />
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
      index: 0,
      swiperOption: {
        direction: "vertical",
        allowSlideNext: false
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    next() {
      if (this.swiper.activeIndex === this.index) {
        this.index++;
      }
      this.swiper.allowSlideNext = true;
    },
    slideChange() {
      this.swiper.allowSlideNext = this.swiper.activeIndex !== this.index;
    }
  },
  watch: {
    index() {
      console.log(this.index);
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
