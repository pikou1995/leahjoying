<template>
  <div class="to-be-continue">
    <p>开始很美好</p>
    <p>过程很曲折</p>
    <p>但故事还在继续</p>
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
