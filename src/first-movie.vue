<template>
  <div class="first-movie">
    <p v-if="step === 0">
      还记得第一次看电影吗?
      <button @click="next">记得记得!</button>
      <button @click="next">这么长时间记得个鬼哦?!</button>
    </p>
    <wechat v-if="step === 1" :conservation="conservation" @next="next(1000)" class="animated fadeInUp"></wechat>
    <video
      v-if="step === 2"
      ref="video"
      src="/static/video/first_movie.mp4"
      @click="play"
      @play="videoPlayed = true"
      @ended="ended"
    ></video>
    <p v-if="videodEnded">那时第一次鼓起勇气牵了你的手，现在想起来依然会心跳加速^_^</p>
    <down v-if="videodEnded" />
  </div>
</template>

<script>
import down from "./components/down.vue";
import wechat from "./components/wechat.vue";
import conservation from "./conservations/first-movie";
import { setTimeout } from 'timers';

export default {
  components: {
    down,
    wechat
  },
  data() {
    return {
      conservation,
      step: 0,
      videoPlayed: false,
      videodEnded: false
    };
  },
  computed: {
    video() {
      return this.$refs.video;
    }
  },
  methods: {
    play() {
      this.videoPlayed ? this.ended() : this.video.play();
    },
    ended() {
      this.videodEnded = true;
      this.$emit("next");
    },
    next(delay = 0) {
      setTimeout(() => {
        this.step++;
      }, delay) 
    }
  }
};
</script>

<style scoped>
video {
  width: 100%;
  margin-top: 50%;
}
</style>
