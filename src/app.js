import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true
    }
});

//单元测试  chai库
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect

// icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    //断言href等于#i-settings,一个输入等于一个输出，没有报错则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
// loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
// icon的前后顺序
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
}
// button 点击事件
{
    //mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    //间谍函数，劫持真正的函数
    let spy = chai.spy(() => {
    })
    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}