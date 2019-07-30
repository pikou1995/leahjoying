<template>
  <div class="first-movie">
    <div v-if="step === 0" class="question">
      <p>还记得第一次看电影吗?</p>
      <img src="/static/imgs/remember.png" @click="next" />
      <img src="/static/imgs/forget.png" @click="next" />
    </div>
    <wechat
      v-if="step === 1"
      :conservation="conservation"
      @next="next(2000)"
      class="animated fadeInUp"
    ></wechat>
    <div class="theater" v-if="step === 2" @click="play">
      <img src="/static/imgs/movie-screen.jpg" />
      <video
        ref="video"
        x5-playsinline
        playsinline
        webkit-playsinline
        class="animated zoomIn"
        :class="{hide: !videoPlayed}"
        src="/static/video/first_movie.mp4"
        @play="startPlaying"
        @ended="ended"
      ></video>
      <img v-if="!fallingLove" src="/static/imgs/movie-seats.jpg" />
      <img v-else class="animated heartBeat" src="/static/imgs/movie-seats-love.jpg" />
    </div>
    <p v-if="videodEnded">那时第一次鼓起勇气牵了你的手，现在想起来依然会心跳加速^_^</p>
    <down v-if="videodEnded" />
  </div>
</template>

<script>
import down from "./components/down.vue";
import wechat from "./components/wechat.vue";
import conservation from "./conservations/first-movie";

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
      videodEnded: false,
      fallingLove: false
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
    startPlaying() {
      this.videoPlayed = true;
      setTimeout(() => {
        this.fallingLove = true;
      }, 43000);
    },
    ended() {
      this.videodEnded = true;
      this.fallingLove = true;
      this.video.pause();
      this.$emit("next");
    },
    next(delay = 0) {
      setTimeout(() => {
        this.step++;
      }, delay);
    }
  }
};
</script>

<style scoped>
.question {
  text-align: center;
}
.question img {
  width: 40%;
}
.theater {
  margin-top: 20%;
  line-height: 0;
}
.theater video,
.theater img {
  width: 100%;
}
.theater video.hide {
  display: none;
}
</style>
