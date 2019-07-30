import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./app.vue";
import "swiper/dist/css/swiper.css";
import "animate.css";

const root = document.createElement("div");
document.body.appendChild(root);

Vue.use(VueAwesomeSwiper);

new Vue(App).$mount(root);
