import Vue from 'vue'
import tButton from './button'
import tIcon from './icon'
import tButtonGroup from './button-group'
import tInput from './input'
import tRow from './row'
import tCol from './col'
import tLayout from './layout'
import tSider from './sider'
import tHeader from './header'
import tContent from './content'
import tFooter from './footer'
import tToast from './toast'
import tPlugin from './plugin'

Vue.use(tPlugin)
Vue.component('t-button', tButton)
Vue.component('t-icon', tIcon)
Vue.component('t-button-group', tButtonGroup)
Vue.component('t-input', tInput)
Vue.component('t-row', tRow)
Vue.component('t-col', tCol)
Vue.component('t-layout', tLayout)
Vue.component('t-sider', tSider)
Vue.component('t-header', tHeader)
Vue.component('t-content', tContent)
Vue.component('t-footer', tFooter)
Vue.component('t-toast', tToast)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
    },

    created() {
    },

    methods: {
        clickToast1(text) {
            this.$toast(text,{

                enableHtml: false,
                position: 'top',
                autoClose: 2
            })
        },
        clickToast2(text) {
            this.$toast(text,{
                text:'关闭',
                enableHtml: false,
                position: 'middle',
                autoClose: false
            })
        },
        clickToast3(text) {
            this.$toast(text,{
                text:'关闭',
                enableHtml: false,
                position: 'bottom',
                autoClose: false
            })
        }
    }
});

