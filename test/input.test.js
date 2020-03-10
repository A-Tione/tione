const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'

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
                let event = new Event(eventName)
                Object.defineProperty(// 将target中的value变为可枚举，测试v-model双向绑定
                    event, 'target', {value: {value: 'hello'}, enumerable: true}
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)// 向一个指定的事件目标派发事件
                expect(callback).to.have.been.calledWith('hello')
            })
        });
    });

})