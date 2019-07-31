<template>
  <div class="guard" :class="{wait: step === 0}">
    <button v-if="step === 1" @click="next">是你吗???</button>
    <button v-if="step === 2" @click="next">真的是你吗???</button>
    <button v-if="step === 3" @click="end">你知道我说的是谁吗???</button>
    <p v-if="accesible">真的是你呀!!!</p>
    <down v-if="accesible" />
  </div>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    setTimeout(() => {
      this.next();
    }, 1000);
  }
};
</script>

<style scoped>
.guard.wait {
  background-color: #fff;
}
.guard {
  height: 100%;
  padding-top: 100%;
  text-align: center;
  transition: background 2s;
}
</style>
