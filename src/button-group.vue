<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
	name: 'cButtonGroup',
	mounted() {
		for (let node of this.$el.children) {
			let { nodeName } = node
			if (nodeName.toLowerCase() !== 'button') {
				console.warn(
					`c-button-group的子元素应该是g-button,但你你写的是${nodeName}`
				)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.c-button-group {
	$border-radius: 4px;
	display: inline-flex;
	vertical-align: middle;
	> .c-button {
		border-radius: 0;
		&:not(:first-child) {
			margin-left: -1px;
		}
		&:first-child {
			border-top-left-radius: $border-radius;
			border-bottom-left-radius: $border-radius;
		}
		&:last-child {
			border-top-right-radius: $border-radius;
			border-bottom-right-radius: $border-radius;
		}
		&:hover {
			z-index: 1;
		}
	}
}
</style>


