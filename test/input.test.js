const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
	it('存在.', () => {
		expect(Input).to.exist
	})
	describe('props', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		it('接收value', () => {
			vm = new Constructor({
				propsData: {
					value: '1234'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.equal('1234')
		})

		it('接收disable', () => {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
		})

		it('接收readOnly', () => {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
		})

		it('可以接收error', () => {
			vm = new Constructor({
				propsData: {
					error: 'error'
				}
			}).$mount()
			const useElements = vm.$el.querySelector('use')
			expect(useElements.getAttribute('xlink:href')).to.equal('#i-error')
			const errorMsg = vm.$el.querySelector('.errorMsg')
			expect(errorMsg.innerText).to.equal('error')
		})
	})

	describe('事件', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		it('支持change/input/focus/blur事件', () => {
			;['change', 'input', 'focus', 'blur'].forEach((eventName) => {
				vm = new Constructor({}).$mount()
				const callback = sinon.fake()
				vm.$on(eventName, callback)

				let event = new Event(eventName)
				let inputElement = vm.$el.querySelector('input')
				Object.defineProperty(event, 'target', {
					value: {
						value: 'hi'
					},
					enumerable: true
				})
				inputElement.dispatchEvent(event)
				// sinon-chai calledWith测参数
				expect(callback).to.have.been.calledWith('hi')
			})
		})
	})
})
