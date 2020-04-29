const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHead from '../../src/tabs/tabs-head'
import TabsBody from '../../src/tabs/tabs-body'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPane from '../../src/tabs/tabs-pane'
Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('子组件接受 selected ', function (done) {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-tabs selected="finance">
            <t-tabs-head>
                <t-tabs-item name="woman" disabled>美女</t-tabs-item>
                <t-tabs-item name="finance">财经</t-tabs-item>
                <t-tabs-item name="sports">体育</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
                <t-tabs-pane name="woman">美女相关资讯</t-tabs-pane>
                <t-tabs-pane name="finance">财经相关资讯</t-tabs-pane>
                <t-tabs-pane name="sports">体育相关资讯</t-tabs-pane>
            </t-tabs-body>
        </t-tabs>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name='finance']`) // 编写可测试的代码
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    });

    it('可以接受 direction prop', function () {

    });


})