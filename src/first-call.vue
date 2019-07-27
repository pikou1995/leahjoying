<template>
  <div>
    <div class="tips">
      <p>+86 177 6459 0091</p>
      <p v-if="accepted">{{ currentTime }}</p>
    </div>
    <div v-if="!accepted">
      <div class="reject">
        <img src="/static/imgs/reject.png" @click="reject" />
      </div>
      <div class="accept">
        <img src="/static/imgs/accept.png" @click="accept" />
      </div>
    </div>
    <div v-else>
      <div class="stop">
        <img src="/static/imgs/stop.png" @click="stop" />
      </div>
      <down v-if="stoped" />
    </div>
    <audio ref="audio" src="/static/audio/first_call.mp3" preload @ended="ended"></audio>
  </div>
</template>

<script>
import down from "./down.vue";

export default {
  components: {
    down
  },
  data() {
    return {
      accepted: false,
      stoped: false,
      playHandler: null,
      currentTime: "00:00"
    };
  },
  methods: {
    accept() {
      this.accepted = true;
      setTimeout(() => {
        this.play();
      }, 1000);
    },
    reject() {
      // TODO
    },
    play() {
      let audio = this.$refs.audio;
      this.playHandler = setInterval(() => {
        let time = Math.ceil(audio.currentTime);
        this.currentTime =
          this.padZero(Math.floor(time / 60)) + ":" + this.padZero(time % 60);
      }, 1000);
      audio.play();
    },
    stop() {
      this.stoped = true;
      clearInterval(this.playHandler);
      let audio = this.$refs.audio;
      audio.pause();
      audio.currentTime = 0;
    },
    ended() {
      this.stoped = true;
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
.accept {
  position: absolute;
  width: 125px;
  height: 165px;
  bottom: 10%;
}

.reject {
  left: 2rem;
}

.accept {
  right: 2rem;
}

.stop {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 10%;
}

.tips {
  text-align: center;
  font-size: 2rem;
  margin-top: 20%;
}
</style>
