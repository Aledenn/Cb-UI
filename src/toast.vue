<template>
  <div class="toast-wrap" :class="toastClass">
    <div class="toast" ref="wrapper">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
	name: 'cToast',
	props: {
		autoClose: {
			type: [Boolean, Number],
			default: true,
			validator(value) {
				return value === false || typeof value === 'number'
			}
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
		},
		position: {
			type: String,
			default: 'top',
			validator(value) {
				return ['top', 'bottom', 'middle'].indexOf(value) >= 0
			}
		}
	},
	computed: {
		toastClass() {
			return {
				[`position-${this.position}`]: true
			}
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
				}, this.autoClose * 1000)
			}
		},
		close() {
			this.$el.remove()
			this.$emit('close')
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
@keyframes slide-up {
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}
@keyframes slide-down {
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.toast-wrap {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	$animation-duration: 1s;
	&.position-top {
		top: 5px;
		transform: translateX(-50%);
		.toast {
			border-top-right-radius: 0;
			border-top-left-radius: 0;
			animation: slide-down $animation-duration;
		}
	}
	&.position-bottom {
		bottom: 5px;
		transform: translateX(-50%);
		.toast {
			border-bottom-right-radius: 0;
			animation: slide-up $animation-duration;
			border-bottom-left-radius: 0;
		}
	}
	&.position-middle {
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		.toast {
			animation: fade-in $animation-duration;
		}
	}
}
.toast {
	font-size: $font-size;
	min-height: $toast-min-height;
	line-height: 1.8;
	display: flex;
	color: white;
	align-items: center;
	background: $toast-bg;
	border-radius: 4px;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
	padding: 0 16px;
	.message {
		padding: 8px 0;
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
}
</style>


