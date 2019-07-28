<template>
  <div class="first-movie">
    <video
      ref="video"
      src="/static/video/first_movie.mp4"
      @click="play"
      @play="videoPlayed = true"
      @ended="ended"
    ></video>
    <p v-if="!videoPlayed">还记得第一次看电影吗，点击视频让我们再看一下吧~</p>
    <p v-if="videodEnded">那时第一次鼓起勇气牵了你的手，现在想起来依然会心跳加速^_^</p>
    <down v-if="videodEnded" />
  </div>
</template>

<script>
import down from "./down.vue";

export default {
  components: {
    down,
  },
  data() {
    return {
      index: 776,
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

