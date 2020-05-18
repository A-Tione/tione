import chai, {expect} from 'chai'
import Button from '../../src/button/button'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
chai.use(sinonChai)

describe('Button', () => {

    /** 通过it函数来隔离测试用例 **/

    it('存在', () => {
        expect(Button).to.be.ok //不是false值就ok
        expect([1,2,3]).to.deep.eq([1,2,3])  // deep 深入进去比较是否相等
        expect(NaN).to.be.NaN  // 专门为NaN做的断言
    })

    it('可以设置icon', () => {
        const warpper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = warpper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-settings')
    })
    it('可以设置loading', () => {
        const warpper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const vm = warpper.vm
        const useElement = warpper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-loading')
    })
    xit('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'settings'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
    })
    xit('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const vm = wrapper.vm
        const callback = sinon.fake(); //sinon库提供的fake假函数，用于知道按钮是否被点击
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})