import chai, {expect} from 'chai'
import Vue from 'vue'
import Popover from '../../src/popover/popover'
import Button from '../../src/button/button'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover', () => {


    it('popover存在', () => {
        expect(Popover).to.exist
    })

    xit('可以设置position的top', () => {
        const warpper = mount(Popover, {
            slots: {
                default: {template: '<button>点我</button>'},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'top'
            }
        })
        warpper.find('button').trigger('click')
        let classes = warpper.find('.content-wrapper').classes()
        expect(classes).to.include('position-top')
    })
    // it('可以设置position的bottom', (done) => {
    //     Vue.component('t-button', Button)
    //     Vue.component('t-popover', Popover)
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //     <t-popover position="bottom" ref="xxx">
    //         <template slot="content">
    //             <div>popover内容</div>
    //         </template>
    //             <t-button>按钮</t-button>
    //     </t-popover>`
    //     const vm = new Vue({
    //         el: div
    //     })
    //     vm.$el.querySelector('button').click()
    //     vm.$nextTick(() => {
    //         expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
    //         done()
    //     })
    // })
    // it('可以设置position的left', (done) => {
    //     Vue.component('t-button', Button)
    //     Vue.component('t-popover', Popover)
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //     <t-popover position="left" ref="xxx">
    //         <template slot="content">
    //             <div>popover内容</div>
    //         </template>
    //             <t-button>按钮</t-button>
    //     </t-popover>`
    //     const vm = new Vue({
    //         el: div
    //     })
    //     vm.$el.querySelector('button').click()
    //     vm.$nextTick(() => {
    //         expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-left')).to.be.true;
    //         done()
    //     })
    // })
    // it('可以设置position的right', (done) => {
    //     Vue.component('t-button', Button)
    //     Vue.component('t-popover', Popover)
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //     <t-popover position="right" ref="xxx">
    //         <template slot="content">
    //             <div>popover内容</div>
    //         </template>
    //             <t-button>按钮</t-button>
    //     </t-popover>`
    //     const vm = new Vue({
    //         el: div
    //     })
    //     vm.$el.querySelector('button').click()
    //     vm.$nextTick(() => {
    //         expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-right')).to.be.true;
    //         done()
    //     })
    // })
    xit('可以设置 trigger', () => {
        const warpper = mount(Popover, {
            slots: {
                default: {template: '<button>点我</button>'},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom',
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        warpper.find('.popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
})