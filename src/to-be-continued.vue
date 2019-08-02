<template>
  <div class="to-be-continue tc">
    <p class="animated fadeIn slower">开始很美好</p>
    <p class="animated fadeIn slower delay-2s">过程很曲折</p>
    <p class="animated fadeIn slower delay-4s">但我们并没有停下脚步</p>
    <p class="animated fadeIn slower delay-6s">这就是我们的缘分和幸运</p>
    <down></down>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("next");
  }
};
</script>

<style scoped>
.to-be-continue {
  padding-top: 30%;
}
</style>
