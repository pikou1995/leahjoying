<template>
  <div class="to-be-continue">
    <p class="animated fadeIn">开始很美好</p>
    <p class="animated fadeIn delay-2s">过程很曲折</p>
    <p class="animated fadeIn delay-4s">但我们并没有停下脚步</p>
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
  text-align: center;
}
</style>
