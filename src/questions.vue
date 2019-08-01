<template>
  <div class="questions">
    <div class="tips">
      <p class="animated fadeIn">
        谢谢你，你真棒~那接下来就看我的啦
        <ai :class="fullCheck ? 'bounceOutDown slower' : 'bounceInDown'" />
      </p>
      <p class="animated fadeIn delay-1s">开始读取记忆内核🧐</p>
      <p class="animated fadeIn delay-2s">......</p>
      <p class="animated fadeIn delay-3s">读取失败⚠️</p>
      <p class="animated fadeIn delay-4s">发现一些问题，需要先破解这些问题😳</p>
      <p class="animated fadeIn delay-5s">下面是这些“正经的”问题🤔</p>
    </div>
    <div v-if="step === 1" :key="question.content">
      <p class="animated fadeIn">{{question.content}}</p>
      <p class="option" v-for="(o, i) in question.options" :key="o">
        <label class="animated fadeIn">
          <input type="checkbox" :value="i" v-model="answers[index]" />
          {{o}}
        </label>
      </p>
      <p>
        <button v-if="hasPreQuestion" @click="preQuestion" style="float: left;">&lt;上一题</button>
        <button v-if="hasNextQuestion" @click="nextQuestion" style="float: right;">下一题&gt;</button>
        <button v-if="!hasNextQuestion" @click="submit" style="float: right;">开始破解</button>
      </p>
    </div>
    <div v-if="step === 2">
      <div v-if="fullCheck">
        <p class="animated tada">破解成功啦！🎉🎉🎉</p>
        <p>已成功打开内核，现在我们去看看吧</p>
      </div>
      <div v-else>
        <p>破解失败了，请再接再厉😏</p>
        <button @click="retry">重新破解</button>
      </div>
    </div>
    <down v-if="fullCheck" />
  </div>
</template>

<script>
export default {
  props: ["debug"],
  data() {
    return {
      step: 0,
      questions: [
        {
          content: "下面哪些电影我们去电影院看过？",
          options: [
            "大侦探皮卡丘",
            "阿拉丁",
            "哥斯拉2",
            "最好的我们",
            "黑衣人：全球追缉",
            "千与千寻"
          ]
        },
        {
          content: "下面哪些是相处的重要组成部分？",
          options: ["挠痒痒", "幽默风趣", "愿景规划", "期望管理"]
        },
        {
          content: "下面哪些不可或缺？",
          options: ["多喝热水", "点都德", "耐用的面霜", "心里话"]
        },
        {
          content: "下面哪些是必须的？",
          options: ["坚持练字和健身", "定期存款", "的士和高德打车", "爱爱"]
        }
      ],
      answers: [],
      fullCheck: false,
      index: 0
    };
  },
  computed: {
    question() {
      return this.questions[this.index];
    },
    hasPreQuestion() {
      return this.index > 0;
    },
    hasNextQuestion() {
      return this.index < this.questions.length - 1;
    }
  },
  methods: {
    preQuestion() {
      this.index--;
    },
    nextQuestion() {
      this.index++;
    },
    next() {
      this.step++;
    },
    end() {
      this.$emit("next");
    },
    retry() {
      this.initAnswers();
      this.index = 0;
      this.step = 1;
    },
    submit() {
      let answers = this.answers.filter(
        (a, i) => a.length === this.questions[i]["options"].length
      );
      this.fullCheck = answers.length === this.answers.length;
      this.next();
      this.fullCheck && this.end();
    },
    initAnswers() {
      this.answers = this.questions.map(_ => []);
    }
  },
  mounted() {
    this.initAnswers();
    setTimeout(() => {
      this.step = 1;
    }, 6000);
  }
};
</script>

<style scoped>
.questions {
  height: 100%;
  padding-top: 10%;
  text-align: center;
}
.questions .tips {
  margin-bottom: 20%;
}
.questions .option {
  text-align: left;
  padding-left: 30%;
}
</style>
