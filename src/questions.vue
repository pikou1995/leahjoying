<template>
  <div class="questions">
    <div class="tips">
      <p class="animated fadeIn">
        谢谢你，你果然是我在等的那个有缘人！
        <ai :class="fullCheck ? 'bounceOutRight' : 'bounceInDown'" />
      </p>
      <p class="animated fadeIn slower delay-1s">接下来就交给我吧！急急如律令~💪</p>
      <p class="animated fadeIn slower delay-2s">开始读取记忆内核🧐......</p>
      <p class="animated bounceIn slow delay-5s">奇怪了，竟然读取失败了😭</p>
      <p class="animated fadeIn slower delay-6s">咦？？？发现一些“很正经的”问题😳</p>
      <p class="animated fadeIn slower delay-7s">好像只有有缘人才能解答呢😂</p>
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
        <button v-if="!hasNextQuestion" @click="submit" style="float: right;">提交答案</button>
      </p>
    </div>
    <div v-if="step === 2">
      <div v-if="fullCheck">
        <p class="animated tada">记忆内核打开啦！🎉🎉🎉</p>
        <p>
          我只能陪你到这儿啦
          <ai class="animated bounceInRight"></ai>
        </p>
        <p class="animated fadeIn delay-2s">接下来还要继续守在这里呢~</p>
        <p class="animated fadeIn delay-4s">咕力白，祝你一路幸福哟~</p>
      </div>
      <div class="animated bounceIn slow" v-else>
        <p>记忆内核好像不认可这份答案呢，请不要灰心🙂</p>
        <p>
          试试
          <button @click="retry">重新解答</button>
        </p>
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
          options: ["愿景规划", "期望管理", "幽默风趣", "挠痒痒"]
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
    }, 8000);
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
