import Vue from 'vue'
import tButton from './button'
import tIcon from './icon'
import tButtonGroup from './button-group'
import tInput from './input'
import tCol from './col'

Vue.component('t-button', tButton)
Vue.component('t-icon', tIcon)
Vue.component('t-button-group', tButtonGroup)
Vue.component('t-input', tInput)
Vue.component('t-col', tCol)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
        message: 'hello'
    },
    methods: {
        inputChange(e) {
            console.log(e);
        }
    }
});

