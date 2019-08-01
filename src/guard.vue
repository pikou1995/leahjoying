<template>
  <div class="guard" :class="{white: step === 0, black: step === 1}">
    <div v-if="step >= 3">
      <p class="animated fadeIn">
        终于等到你！
        <ai @click="step = 4" class="flash" v-if="step === 3" />
        <ai @click="step = 5" class="wobble" v-if="step === 4" />
        <ai @click="step = 6" class="shake" v-if="step === 5" />
        <ai @click="end" class="bounce" v-if="step === 6" />
        <ai class="bounceOutDown" v-if="accesible" />
      </p>
      <p class="animated fadeIn delay-1s">我是被封印在这里的猪猪型AI</p>
      <p class="animated fadeIn delay-2s">在这里守护着主人和他最心爱的女孩的回忆</p>
      <p class="animated fadeIn delay-3s">我已经迫不及待的想带你去看了</p>
      <p class="animated fadeIn delay-4s">请先帮我解除封印吧~</p>
      <p class="animated fadeIn delay-5s">(要怎么解除封印呢？请开动你的小脑筋找找机关吧~)</p>
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
  padding-top: 70%;
  text-align: center;
  transition: background 5s;
}
</style>
