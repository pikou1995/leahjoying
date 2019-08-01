<template>
  <div class="to-be-continue">
    <p class="animated fadeIn">开始很美好</p>
    <p class="animated fadeIn delay-1s">过程很曲折</p>
    <p class="animated fadeIn delay-2s">但我们并没有停下脚步</p>
    <p class="animated fadeIn delay-3s">这就是我们的缘分</p>
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
  text-align: center;
}
</style>
