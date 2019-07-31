<template>
  <div class="guard" :class="{white: step === 0, black: step === 1}">
    <button class="animated fadeIn slow" v-if="step === 3" @click="next">你是怎么来到这里的呀？</button>
    <button class="animated fadeIn" v-if="step === 4" @click="next">这里保存着我和我最心爱的女孩的回忆</button>
    <button class="animated fadeIn" v-if="step === 5" @click="end">你知道我说的是谁吗？</button>
    <p v-if="accesible">原来是你呀！</p>
    <down v-if="accesible" />
  </div>
</template>

<script>
export default {
  props: ["debug"],
  data() {
    return {
      step: 0,
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
    delay() {
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
  padding-top: 100%;
  text-align: center;
  transition: background 5s;
}
</style>
