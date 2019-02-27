<template>
  <div>
    <c-button>default</c-button>
    <c-button icon="settings">Icon</c-button>
    <c-button icon="settings" iconPosition="right">Icon</c-button>
    <c-button :loading="loading" @click="click">Icon</c-button>
    <c-button disabled>disabled</c-button>
    <pre><code>{{code}}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button'
export default {
	components: {
		'c-button': Button
	},
	data() {
		return {
			loading: true,
			code: `<c-button>default</c-button>
<c-button icon="settings">Icon</c-button>
<c-button icon="settings" iconPosition="right">Icon</c-button>
<c-button :loading="loading" @click="click">Icon</c-button>
<c-button disabled>disabled</c-button>`
				.replace(/^ {8}/gm, '')
				.trim()
		}
	},
	methods: {
		click() {
			this.loading = !this.loading
		}
	}
}
</script>

