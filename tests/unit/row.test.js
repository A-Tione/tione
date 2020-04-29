const expect = chai.expect;
import Vue from 'vue'
import Row from '../../src/grid/row'
import Col from '../../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接收 gutter 属性.', (done) => {
        //如果不加done 默认测试代码都是同步的，顺序执行完成后，直接关闭测试用例。 异步：加done，在异步执行完成结尾处调用done 表示完成
        Vue.component('t-row', Row)
        Vue.component('t-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <t-row gutter="20">
        <t-col span="12"></t-col>
        <t-col span="12"></t-col>
      </t-row>
    `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })

})