<template>
  <div>
    <div class="question">
      <p>还记得第一次看电影的时候吗？</p>
      <img
        src="/static/imgs/remember.png"
        class="animated"
        :class="{'tada infinite': answer === 'remember', bounceOutDown: answer === 'forget'}"
        @click="remember"
      />
      <img
        src="/static/imgs/forget.png"
        class="animated"
        :class="{'shake infinite': answer === 'forget', bounceOutDown: answer === 'remember'}"
        @click="forget"
      />
    </div>
    <down v-if="answer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      answered: false,
      answer: ""
    };
  },
  methods: {
    remember() {
      this.answer = "remember";
      this.next();
    },
    forget() {
      this.answer = "forget";
      this.next();
    },
    next() {
      this.$emit("next");
    }
  }
};
</script>

<style scoped>
.question {
  margin-top: 40%;
  text-align: center;
}
.question p {
  margin-bottom: 10%;
}
.question img {
  width: 40%;
}
</style>
