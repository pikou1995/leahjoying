<template>
  <div v-if="start" class="animated bounceInLeft in-and-out" :class="{bounceOutLeft: readyToOut}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["start"],
  data() {
    return {
      readyToOut: false
    };
  },
  watch: {
    start() {
      if (!this.start) return;
      setTimeout(() => {
        this.readyToOut = true;
      }, 2000);
      setTimeout(() => {
        this.$emit("out");
        this.readyToOut = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.in-and-out {
  text-align: center;
}
</style>
