<template>
  <div style="display: none;">
    <img v-for="filename in imgs" :src="`/static/imgs/${filename}`" :key="filename" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require
        .context("../static/imgs/", false, /.(png|jpg|jpeg|gif|bmp|webp)$/)
        .keys()
        .map(f => f.substring(2))
    };
  }
};
</script>
