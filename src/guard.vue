<template>
  <div class="guard" :class="{white: step === 0, black: step === 1}">
    <div v-if="step === 3">
      <p class="animated fadeIn">
        终于等到你！
        <span @click="end">🐷</span>
      </p>
      <p class="animated fadeIn delay-1s">这里保存着我和我最心爱的女孩的回忆</p>
      <p class="animated fadeIn delay-2s">我已经迫不及待的想带你去看了</p>
      <p class="animated fadeIn delay-3s">但是那么轻易的给你看我岂不是很没面子</p>
      <p class="animated fadeIn delay-4s">所以我设置了一些障碍</p>
      <p class="animated fadeIn delay-5s">等着你去探索吧~</p>
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
      // debugStep: 3,
      accesible: false
    };
  },
  methods: {
    next() {
      this.step++;
    },
    end() {
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
  padding-top: 80%;
  text-align: center;
  transition: background 5s;
}
</style>
