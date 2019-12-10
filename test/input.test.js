const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在', function () {
        expect(Input).to.exist
    });

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm = null
        afterEach(()=>{
            vm.$destroy()
        })

        it('接收 value', function () {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        });

        it('接收 disabled', function () {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        });

        it('接收 readonly', function () {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        });

        it('接收 error', function () {
            vm = new Constructor({
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
        const Constructor = Vue.extend(Input)
        let vm = null
        afterEach(()=>{
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', function () {
            ['change','input','focus','blur'].forEach(eventName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发input的change事件
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)//测试change、以及change事件的第一个参数
            })
        });
    });

})