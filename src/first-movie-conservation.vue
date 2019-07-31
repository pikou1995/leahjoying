<template>
  <div>
    <wechat :conservation="conservation" @next="next" :class="end && 'animated bounce infinite slower'"></wechat>
    <down v-if="end" />
  </div>
</template>

<script>
import wechat from "./components/wechat.vue";
import conservation from "./conservations/first-movie";

export default {
  components: {
    wechat
  },
  data() {
    return {
      conservation,
      end: false
    };
  },
  methods: {
    next() {
      this.end = true;
      this.$emit("next");
    }
  }
};
</script>
