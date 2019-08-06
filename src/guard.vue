<template>
  <div class="guard" :class="{white: step === 0, black: step === 1}">
    <div v-if="step >= 3">
      <p class="animated fadeIn slower">
        终于等到你！
        <ai @click="step = 4" class="flash delay-1s" v-if="step === 3" />
        <ai @click="step = 5" class="wobble" v-if="step === 4" />
        <ai @click="step = 6" class="shake" v-if="step === 5" />
        <ai @click="end" class="bounce" v-if="step === 6" />
        <ai class="bounceOutDown slower" v-if="accesible" />
      </p>
      <p class="animated fadeIn slower delay-2s">我是AI猪猪，一直在等待一位有缘人到来</p>
      <p class="animated fadeIn slower delay-4s">
        主人吩咐过，等到那位有缘人后
      </p>
      <p class="animated fadeIn slower delay-6s">
        把他和
        <span class="animated heartBeat delay-6s slow">最心爱女孩</span>
        的
        <span class="animated fadeInUp delay-7s">回忆</span>
        交给那个人
      </p>
      <p class="animated fadeIn slower delay-8s">都怪我调皮不小心碰到机关被困住了</p>
      <p class="animated fadeIn slower delay-10s">你能先帮我打开机关吗？</p>
      <p class="animated fadeIn slower delay-12s">(机关在哪呢？开动你的小脑筋找找机关吧~)</p>
    </div>
    <down v-if="accesible" />
  </div>
</template>

<script>
export default {
  props: ["debug"],
  data() {
    return {
      step: 0,
      debugStep: 3,
      accesible: false
    };
  },
  methods: {
    next() {
      this.step++;
    },
    end() {
      this.next();
      this.accesible = true;
      this.$emit("next");
    },
    delay(time = 5000) {
      return new Promise(resolve => {
        setTimeout(
          () => {
            this.next();
            resolve(true);
          },
          this.debug ? 1000 : 5000
        );
      });
    }
  },
  async mounted() {
    if (this.debug && this.debugStep) {
      this.step = this.debugStep;
      return;
    }
    await this.delay();
    await this.delay();
    await this.delay();
  }
};
</script>

<style scoped>
.guard.white {
  background-color: #fff;
}
.guard.black {
  background-color: #000;
}
.guard {
  height: 100%;
  padding-top: 60%;
  text-align: center;
  transition: background 5s;
}
</style>
