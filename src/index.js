import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./app.vue";
import Down from "./components/down.vue";
import Ai from "./components/ai.vue";
import "swiper/dist/css/swiper.css";
import "animate.css";

const root = document.createElement("div");
document.body.appendChild(root);

Vue.use(VueAwesomeSwiper);
Vue.component("down", Down);
Vue.component("ai", Ai);

new Vue(App).$mount(root);
