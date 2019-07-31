<template>
  <div>
    <div class="theater" :class="{played: videoPlayed}" @click="play">
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
      <img
        v-else
        class="animated heartBeat slower"
        :class="{infinite: videodEnded}"
        src="/static/imgs/movie-seats-love.jpg"
      />
    </div>
    <div v-if="videodEnded">那时第一次鼓起勇气牵了你的手，现在想起来依然会心跳加速^_^</div>
    <down v-if="videodEnded" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoPlayed: false,
      videodEnded: false,
      fallingLove: false,
      tryTimes: 3
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
    }
  }
};
</script>

<style scoped>
.theater {
  margin-top: 20%;
  line-height: 0;
}
.theater.played {
  margin-top: 10%;
}
.theater video,
.theater img {
  width: 100%;
}
.theater video.hide {
  display: none;
}
</style>
