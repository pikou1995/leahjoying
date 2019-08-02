<template>
  <div class="first-call h100">
    <div class="h100" :class="{'animated slideOutUp delay-1s': stoped}" v-if="step === 0">
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
      <audio ref="audio" src="/static/audio/first_call.mp3" @ended="stop"></audio>
    </div>
    <div v-if="step === 1">
      <div class="tc pt30">
        <p class="animated fadeIn slower">这是我们第一次联系</p>
        <p class="animated fadeIn slower delay-2s">当时彼此都没有想到</p>
        <p class="animated fadeIn slower delay-4s">完全没有交集的两个人</p>
        <p class="animated fadeIn slower delay-6s">会在一起走到今天</p>
      </div>
      <down class="animated slideInUp delay-8s"/>
    </div>
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
      step: 0,
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
      return this.$refs.audio;
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
      if (!this.playHandler) return;
      clearInterval(this.playHandler);
      this.audio.pause();
      this.audio.currentTime = 0;
      this.stoped = true;
      setTimeout(() => {
        this.next();
      }, 2000);
    },
    next() {
      this.step = 1;
      this.$emit("next");
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
  padding-top: 20%;
}
</style>
