import tToast from './toast'
export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, toastOptions) {
            let Construtor = Vue.extend(tToast)
            let toast = new Construtor({
                propsData: {
                    closeButton: toastOptions
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}