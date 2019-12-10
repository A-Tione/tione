import Vue from 'vue'
import tButton from './button'
import tIcon from './icon'
import tButtonGroup from './button-group'
import tInput from './input'

Vue.component('t-button', tButton)
Vue.component('t-icon', tIcon)
Vue.component('t-button-group', tButtonGroup)
Vue.component('t-input', tInput)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true
    },
    methods: {
        inputChange(e,qq) {
            console.log(e,qq);
        }
    }
});

