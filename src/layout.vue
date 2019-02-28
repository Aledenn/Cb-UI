<template>
  <div class="c-layout" :class="layoutClass">
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
		this.$children.forEach((vm) => {
			if (vm.$options.name === 'cSider') {
				this.layoutClass['has-sider'] = true
			}
		})
	}
}
</script>

<style lang="scss" scoped>
.c-layout {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	&.has-sider {
		flex-direction: row;
	}
}
</style>

