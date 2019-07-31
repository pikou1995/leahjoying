<template>
  <div @click="forward">
    <div class="phone-wrap" :style="{transform: scale}">
      <div class="iphone" ref="container" :style="{height: originHeight}">
        <div class="i-body">
          <template v-for="(item, i) in playedConservation">
            <div v-if="item.type === 2" class="i-b-time" :key="i">
              <span>{{item.content}}</span>
            </div>
            <div v-else-if="item.type === 0" class="i-b-rec-text" :key="i">
              <img src="/static/imgs/avatar.jpg" />
              <div>
                <span>
                  <i></i>
                  <em v-html="item.content"></em>
                </span>
              </div>
            </div>
            <div v-else-if="item.type === 1" class="i-b-sen-text" :key="i">
              <img src="/static/imgs/avatar2.jpg" />
              <div>
                <span>
                  <i></i>
                  <em v-html="item.content"></em>
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["conservation"],
  data() {
    return {
      playHandler: null,
      index: 0,
      width: 414,
      height: 896
    };
  },
  computed: {
    playedConservation() {
      return this.conservation.slice(0, this.index);
    },
    ratio() {
      return (0.5 * this.width) / 414;
    },
    scale() {
      return `scale(${this.ratio})`;
    },
    originHeight() {
      return this.height / this.ratio + "px";
    }
  },
  methods: {
    play() {
      this.playHandler = setInterval(() => {
        this.index++;
        if (!(this.index in this.conservation)) {
          this.stop();
        }
      }, 1000);
    },
    stop() {
      clearInterval(this.playHandler);
      this.$emit("next");
    },
    forward() {
      this.index++;
    }
  },
  updated() {
    let container = this.$refs.container;
    container.scrollTop = container.scrollHeight;
  },
  created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  mounted() {
    this.play();
  }
};
</script>


<style scoped>
@import "./wechat.css";
</style>
