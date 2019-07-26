<template>
  <div id="app">
    <p>爱已生长{{time}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '2019-05-01T18:40:00',
      now: Date.now(),
      timeHandler: null,
    }
  },
  computed: {
    startTimestamp() {
      return Date.parse(this.startTime)
    },
    time() {
      let delta = this.now - this.startTimestamp
      let days = Math.floor(delta / 1000 / 60 / 60 / 24)
      let hours = Math.floor(delta / 1000 / 60 / 60 % 24)
      let minutes = Math.floor(delta / 1000 / 60 % 60)
      let seconds = Math.floor(delta / 1000 % 60)
      return `${days}天${hours}时${minutes}分${seconds}秒`
    },
  },
  methods: {
    startTick() {
      this.timeHandler = setInterval(() => {
        this.now = Date.now()
      }, 1000)
    },
    stopTick() {
      clearInterval(this.timeHandler)
    }
  },
  mounted() {
    this.startTick() 
  },
}
</script>
