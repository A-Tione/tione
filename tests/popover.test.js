const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover/popover'
import Button from '../src/button/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover', () => {


    it('popover存在', () => {
        expect(Popover).to.exist
    })

    it('可以设置position的top', (done) => {
        Vue.component('t-button', Button)
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-popover position="top" ref="xxx">
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
            expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-top')).to.be.true;
            done()
        })
    })
    it('可以设置position的bottom', (done) => {
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
            expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
            done()
        })
    })
    it('可以设置position的left', (done) => {
        Vue.component('t-button', Button)
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-popover position="left" ref="xxx">
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
            expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-left')).to.be.true;
            done()
        })
    })
    it('可以设置position的right', (done) => {
        Vue.component('t-button', Button)
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-popover position="right" ref="xxx">
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
            expect(vm.$refs.xxx.$refs.contentWrapper.classList.contains('position-right')).to.be.true;
            done()
        })
    })
    xit('可以设置 trigger', (done) => {
        Vue.component('t-button', Button)
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-popover tirgger="hover" ref="xxx">
            <template slot="content">
                <div>popover内容</div>
            </template>
                <t-button>按钮</t-button>
        </t-popover>`
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let event = new Event('mouseenter')
            vm.$el.dispatchEvent(event)// 触发hover事件
            vm.$nextTick(() => {
                expect(vm.$refs.xxx.$refs.contentWrapper).to.exist
                done()
            })
        })
    })
})