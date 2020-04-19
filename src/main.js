import Vue from "vue";
import Demo from "./demo.vue";
import tPlugin from './toast/plugin'
Vue.use(tPlugin)

Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo)
}).$mount("#app");