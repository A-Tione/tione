const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

function commonMethod(value,input,expectAnswer) {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
        propsData: {
            value
        }
    }).$mount()
    const inputElement = vm.$el.querySelector(input)
    expect(inputElement.value).to.equal(expectAnswer)
    vm.$destroy()
}

describe('Input', () => {

    it('存在', function () {
        expect(Input).to.exist
    });

    describe('props', () => {
        it('接收 value', function () {
            commonMethod()
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        });

        it('接收 disabled', function () {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        });

        it('接收 readonly', function () {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        });

        it('接收 error', function () {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: '这是一个错误信息'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('这是一个错误信息')
            vm.$destroy()
        });
    });

    describe('事件', () => {
        it('支持change事件', function () {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        });
    });

})