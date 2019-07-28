<template>
  <div>
    <button v-if="!accesible" @click="check">是你吗???</button>
    <p v-else>真的是你!!!</p>
    <down v-if="accesible" />
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
      accesible: false
    };
  },
  methods: {
    check() {
      this.accesible = true;
      this.$emit("next");
    }
  }
};
</script>
