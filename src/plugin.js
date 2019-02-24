import Toast from './toast'
export default {
	install(Vue, options) {
		Vue.prototype.$toast = function(message, toastOptions) {
			let Constructor = Vue.extend(Toast)
			console.log(message, toastOptions)
			let toast = new Constructor({
				propsData: {
					closeButton: toastOptions.closeButton
				}
			})
			// let toast = new Constructor({})
			toast.$slots.default = [message]
			toast.$mount()
			document.body.appendChild(toast.$el)
		}
	}
}
