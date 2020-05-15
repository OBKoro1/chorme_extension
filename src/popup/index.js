/*
 * Author: OBKoro1
 * Date: 2019-10-23 14:37:01
 * LastEditors: OBKoro1
 * LastEditTime: 2019-11-14 15:53:14
 * FilePath: //Chrome-extension-vue-template//src//popup//index.js
 * Description: 
 */
import Vue from "vue";
import AppComponent from "./App/App.vue";

// TODO: 提醒用户某个网站不要访问 浪费时间 应该滚去学习
Vue.component("app-component", AppComponent);

import {
  Card,
  Button
} from 'element-ui';

Vue.use(Card);
Vue.use(Button);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});