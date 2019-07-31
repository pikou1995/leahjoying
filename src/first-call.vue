<template>
  <div class="first-call">
    <div class="tips">
      <p>+86 177 6459 0091</p>
      <p v-if="accepted">{{ currentTime }}</p>
    </div>
    <div v-if="!accepted">
      <inAndOut :start="rejected" @out="rejected = false">
        <img src="/static/imgs/lost.jpg" />
      </inAndOut>
      <div class="reject">
        <img src="/static/imgs/reject.png" @click="reject" />
      </div>
      <div class="accept animated infinite slower heartBeat">
        <img src="/static/imgs/accept.png" @click="accept" />
      </div>
    </div>
    <div v-else class="stop-container">
      <div class="stop">
        <img src="/static/imgs/stop.png" @click="stop" />
      </div>
    </div>
    <down v-if="stoped" />
    <audio ref="audio" src="/static/audio/first_call.mp3" @ended="ended"></audio>
  </div>
</template>

<script>
import inAndOut from "./components/in-and-out.vue";

export default {
  components: {
    inAndOut
  },
  data() {
    return {
      accepted: false,
      rejected: false,
      halfHeartBreak: false,
      stoped: false,
      playHandler: null,
      currentTime: "00:00"
    };
  },
  computed: {
    audio() {
      return this.$refs.audio
    }
  },
  methods: {
    accept() {
      this.accepted = true;
      setTimeout(() => {
        this.play();
      }, 1000);
    },
    reject() {
      this.rejected = true;
    },
    play() {
      this.playHandler = setInterval(() => {
        let time = Math.ceil(this.audio.currentTime);
        this.currentTime =
          this.padZero(Math.floor(time / 60)) + ":" + this.padZero(time % 60);
      }, 1000);
      this.audio.play();
    },
    stop() {
      if (!this.playHandler) return
      clearInterval(this.playHandler);
      this.audio.pause();
      this.audio.currentTime = 0;
      this.ended();
    },
    ended() {
      this.stoped = true;
      this.$emit("next");
      // TODO
    },
    padZero(num) {
      return (num < 10 ? "0" : "") + num;
    }
  }
};
</script>

<style scoped>
.reject,
.accept,
.stop-container {
  position: absolute;
  width: 80px;
  bottom: 10%;
}

.reject img,
.accept img,
.stop img {
  width: 100%;
}

.reject {
  left: 2rem;
}

.accept {
  right: 2rem;
}

.stop {
  position: relative;
  width: 80px;
  margin: auto;
}

.stop-container,
.stop img {
  width: 100%;
}

.tips {
  text-align: center;
  font-size: 2rem;
  margin-top: 20%;
}
</style>
