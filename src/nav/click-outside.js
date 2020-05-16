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
    bind: function (el, binding, vnode) {
        callback.push({el, callback: binding.value})
    }
}