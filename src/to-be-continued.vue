<template>
  <div class="to-be-continue tc">
    <p class="animated fadeIn slower">开始很幸运</p>
    <p class="animated fadeIn slower delay-2s">过程很曲折</p>
    <p class="animated fadeIn slower delay-4s">没有什么是从来就有</p>
    <p class="animated fadeIn slower delay-6s">也没有任何东西会理所当然</p>
    <p class="animated fadeIn slower delay-8s">我们总是想看清爱情的寓意</p>
    <p class="animated fadeIn slower delay-10s">解开的谜底背后又会是什么谜题</p>
    <p class="animated fadeIn slower delay-12s">但我们并没有停下脚步</p>
    <p class="animated fadeIn slower delay-14s">这就是我们的缘分</p>
    <down class="animated fadeIn slower delay-14s"></down>
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
