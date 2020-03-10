const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })

    it('接受 autoClose 属性', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: 1,
            }
        }).$mount(div)
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        })
    })

    it('接受 closeButton 属性', function (done) {
        const callback = sinon.fake()
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: '关闭来',
                    callback,
                }
            }
        }).$mount()
        let closeButton = vm.$el.querySelector('.box-border')
        expect(closeButton.textContent.trim()).to.eq('关闭来')
        setTimeout(() => {
            closeButton.click()
            expect(callback).to.have.been.called // 期待至少被点击一次
            done()
        }, 200) // 用户点击不会那么快，需延迟200毫秒，不延迟会有警告
    });

    it('接受 enbleHtml', function () {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {enableHtml: true}
        })
        vm.$slots.default = ['<strong id="yyy">hi</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#yyy')
        expect(strong).to.exist  // 是否存在
    });

    it('接受 position', function () {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'middle'
            }
        }).$mount()
        expect(vm.$el.classList.contains('middle')).to.eq(true)
    });

})