<template>
  <swiper :options="swiperOption" style="height: 100%;">
    <swiper-slide>
      <firstCall />
    </swiper-slide>
    <swiper-slide>
      <heartbeat />
    </swiper-slide>
  </swiper>
</template>

<script>
import heartbeat from "./heartbeat.vue";
import firstCall from "./first-call.vue";

export default {
  components: {
    heartbeat,
    firstCall
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical"
      }
    };
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
body {
  background-color: #252c41;
  color: #fff;
  font-size: 1rem;
  line-height: 1.4;
}
</style>
