<template>
  <div style="text-align: center;">
    <p>
      <button v-if="step === 0" @click="check">是你吗???</button>
      <button v-if="step === 1" @click="check">真的是你吗???</button>
      <button v-if="step === 2" @click="check">你知道我说的是谁吗???</button>
    </p>
    <p v-if="accesible">真的是你呀!!!</p>
    <down v-if="accesible" />
  </div>
</template>

<script>
import down from "./components/down.vue";

export default {
  components: {
    down
  },
  data() {
    return {
      accesible: false,
      step: 0
    };
  },
  methods: {
    check() {
      if (this.step >= 2) {
        this.accesible = true;
        this.$emit("next");
      }
      this.step++;
    }
  }
};
</script>
