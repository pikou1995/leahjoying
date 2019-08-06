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
        src="/static/video/first_movie.mp4"
        :class="{hide: !videoPlayed}"
        @play="startPlaying"
        @ended="ended"
      ></video>
      <img v-if="!fallingLove" src="/static/imgs/movie-seats.jpg" />
      <img
        v-else
        class="animated heartBeat slow"
        src="/static/imgs/movie-seats-love.jpg"
      />
    </div>
    <div class="tc" v-if="videodEnded">
      <p class="animated fadeIn slower">那时第一次鼓起勇气牵了你的手</p>
      <p class="animated fadeIn slower delay-2s">现在依然记得心跳加速的感觉
        <span class="animated heartBeat fast infinite">❤️</span>
      </p>
    </div>
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
