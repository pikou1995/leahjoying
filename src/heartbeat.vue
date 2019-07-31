<template>
  <div class="heartbeat">
    <div class="heart-container animated" :class="animateClassName">
      <span id="echo"></span>
      <span id="heart" @click="easterEgg">
        <i>在一起的{{time}}</i>
      </span>
    </div>
    <down>Love © {{year}} Pikou💕Ling</down>
  </div>
</template>

<script>
import ANIMATE_CLASSNAMES from "./animateClassNames";
import { randomIndex } from "./utils";

export default {
  data() {
    return {
      startTime: "2019-05-01T18:40:00",
      now: Date.now(),
      timeHandler: null,
      animateIndex: -1
    };
  },
  computed: {
    startTimestamp() {
      return Date.parse(this.startTime);
    },
    year() {
      let thisYear = new Date().getFullYear();
      return thisYear === 2019 ? "2019" : "2019 - " + thisYear;
    },
    time() {
      let delta = this.now - this.startTimestamp;
      let days = Math.floor(delta / 1000 / 60 / 60 / 24);
      let hours = Math.floor((delta / 1000 / 60 / 60) % 24);
      let minutes = Math.floor((delta / 1000 / 60) % 60);
      let seconds = Math.floor((delta / 1000) % 60);
      return `${days}天${hours}时${minutes}分${seconds}秒`;
    },
    animateClassNames() {
      return ANIMATE_CLASSNAMES.filter(
        c => c.indexOf("Out") === -1 && c !== "hinge"
      );
    },
    animateClassName() {
      let i = this.animateIndex;
      return i === -1 ? "zoomIn" : this.animateClassNames[i];
    }
  },
  methods: {
    startTick() {
      this.timeHandler = setInterval(() => {
        this.now = Date.now();
      }, 1000);
    },
    stopTick() {
      clearInterval(this.timeHandler);
    },
    easterEgg() {
      let i = randomIndex(this.animateClassNames.length);
      this.animateIndex = i === this.animateIndex ? this.easterEgg() : i;
    }
  },
  mounted() {
    this.startTick();
  }
};
</script>

<style scoped>
@import "./heartbeat.css";
</style>
