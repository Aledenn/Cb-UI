<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
	name: 'cLayout',
	data() {
		return {
			layoutClass: {
				'has-sider': false
			}
		}
	},
	mounted() {
		console.log(this.$children)
		this.$children.forEach((vm) => {
			console.log(vm.$options.name)
			if (vm.$options.name === 'cSider') {
				console.log(this.layoutClass)
				this.layoutClass['has-sider'] = true
			}
		})
	}
}
</script>

<style lang="scss" scoped>
.layout {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	&.has-sider {
		flex-direction: row;
	}
}
</style>

