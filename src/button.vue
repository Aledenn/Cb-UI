<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]:true} " @click="onClick">
    <c-icon v-if="loading" class="loading icon" name="loading"></c-icon>
    <c-icon v-if="icon&&!loading" :name="icon" class="icon"></c-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import cIcon from './icon.vue'
export default {
	name: 'cButton',
	components: { cIcon },
	data() {
		return { selfLoading: false }
	},
	props: {
		icon: {},
		loading: {
			type: Boolean,
			default: false
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator(value) {
				return value === 'left' || value === 'right'
			}
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	}
}
</script>
<style lang='scss' scoped>
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.c-button {
	$font-size: 14px;
	$button-height: 32px;
	$border-radius: 4px;
	$border-color: #999;
	$button-bg: white;
	$border-color-hover: #666;
	$button-active-bg: #eee;

	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	font-size: $font-size;
	height: $button-height;
	padding: 0 1em;
	border-radius: $border-radius;
	border: 1px solid $border-color;
	background: $button-bg;
	&:hover {
		border-color: $border-color-hover;
	}
	&:active {
		background-color: $button-active-bg;
	}
	&:focus {
		outline: none;
	}
	> .icon {
		order: 1;
		margin-right: 0.1em;
	}
	> .content {
		order: 2;
	}
	&.icon-right {
		> .icon {
			order: 2;
			margin-right: 0;
			margin-left: 0.1em;
		}
		> .content {
			order: 1;
		}
	}
	.loading {
		animation: spin 5s infinite linear;
	}
}
</style>

