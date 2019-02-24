<template>
  <div class="toast" ref="wrapper">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
	name: 'cToast',
	props: {
		autoClose: {
			type: Boolean,
			default: true
		},
		autoCloseDelay: {
			type: [Number, String],
			default: 5
		},
		closeButton: {
			type: Object,
			default: () => {
				return {
					text: '关闭',
					callback: (toast) => {
						toast.close()
					}
				}
			}
		},
		enableHtml: {
			type: Boolean,
			default: false
		}
	},
	created() {},
	mounted() {
		this.updateStyles()
		this.execAutoClose()
	},
	methods: {
		updateStyles() {
			this.$nextTick(() => {
				this.$refs.line.style.height =
					this.$refs.wrapper.getBoundingClientRect().height + 'px'
			})
		},
		execAutoClose() {
			if (this.autoClose) {
				setTimeout(() => {
					this.close()
				}, this.autoCloseDelay * 1000)
			}
		},
		close() {
			this.$el.remove()
			this.$destroy()
		},
		onClickClose() {
			this.close()
			if (this.closeButton.callback === undefined) return
			if (typeof this.closeButton.callback !== 'function') {
				console.error('callback不为函数')
				return
			}
			this.closeButton.callback(this)
		}
	}
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
	font-size: $font-size;
	min-height: $toast-min-height;
	line-height: 1.8;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	color: white;
	align-items: center;
	background: $toast-bg;
	border-radius: 4px;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
	padding: 6px 16px;
}

.close {
	padding-left: 16px;
	flex-shrink: 0;
}

.line {
	background: white;
	border-left: 1px solid #666;
	margin-left: 16px;
}
</style>


