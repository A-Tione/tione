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
import tTabs from './tabs'
import tTabsHead from './tabs-head'
import tTabsBody from './tabs-body'
import tTabsItem from './tabs-item'
import tTabsPane from './tabs-pane'

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
Vue.component('t-tabs', tTabs)
Vue.component('t-tabs-head', tTabsHead)
Vue.component('t-tabs-body', tTabsBody)
Vue.component('t-tabs-item', tTabsItem)
Vue.component('t-tabs-pane', tTabsPane)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports', //体育
    },

    created() {
    },

    methods: {

    }
});

