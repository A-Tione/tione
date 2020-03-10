import Vue from 'vue'
import tButton from './button/button'
import tIcon from './icon'
import tButtonGroup from './button/button-group'
import tInput from './input/input'
import tRow from './grid/row'
import tCol from './grid/col'
import tLayout from './layout/layout'
import tSider from './layout/sider'
import tHeader from './layout/header'
import tContent from './layout/content'
import tFooter from './layout/footer'
import tToast from './toast/toast'
import tPlugin from './toast/plugin'
import tTabs from './tabs/tabs'
import tTabsHead from './tabs/tabs-head'
import tTabsBody from './tabs/tabs-body'
import tTabsItem from './tabs/tabs-item'
import tTabsPane from './tabs/tabs-pane'
import tPopover from './popover/popover'
import tCollapse from './collapse/collapse'
import tCollapseItem from './collapse/collapse-item'

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
Vue.component('t-popover', tPopover)
Vue.component('t-collapse', tCollapse)
Vue.component('t-collapse-item', tCollapseItem)

new Vue({
    el: '#app',
    data: {
        selectedArray: ['1','2'],
    },

    created() {
    },

    methods: {

    }
});

