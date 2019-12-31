const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover', () => {


    it('popover存在', () => {
        expect(Popover).to.exist
    })

    it('可以设置 position.', (done) => {
        Vue.component('t-button', Button)
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-popover position="bottom" ref="xxx">
            <template slot="content">
                <div>popover内容</div>
            </template>
                <t-button>按钮</t-button>
        </t-popover>`
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            let {contentWrapper} = vm.$refs.xxx.$refs.contentWrapper
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
            done()
        })
    })
})