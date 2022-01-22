import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import router from "./router";
import store from './store';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
createApp(App).use(router, axios, createToast).use(store).mount("#app");