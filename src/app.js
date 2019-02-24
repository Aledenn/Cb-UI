import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import plugin from './plugin'

Vue.component('c-icon', Icon)
Vue.component('c-button', Button)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-input', Input)
Vue.component('c-row', Row)
Vue.component('c-col', Col)
Vue.component('c-layout', Layout)
Vue.component('c-header', Header)
Vue.component('c-sider', Sider)
Vue.component('c-content', Content)
Vue.component('c-footer', Footer)
Vue.use(plugin)

new Vue({
	el: '#app',
	data: {
		loading1: false,
		message: 'hi'
	},
	created() {},
	methods: {
		showToast1() {
			this.showToast('top')
		},
		showToast2() {
			this.showToast('middle')
		},
		showToast3() {
			this.showToast('bottom')
		},
		showToast(position) {
			this.$toast(`<strong>我是${Math.random() * 100} </strong>`, {
				autoCloseDelay: 50,
				position,
				closeButton: {
					text: '知道了',
					callback: function(toast) {
						console.log(toast)
					}
				},
				enableHtml: true
			})
		}
	}
})
