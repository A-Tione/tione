let callback = []
document.addEventListener('click', ev => {
    let {target} = ev
    callback.forEach(item => {
        if (target === item.el || item.el.contains(target)) {
            return
        } else {
            item.callback()
        }
    })
})

export default {
    bind: function (el, binding, vnode) { //自定义指令——bind 钩子函数，只调用一次  binding: 一个对象，binding.value: 指令的绑定值
        callback.push({el, callback: binding.value})
    }
}

