<template>
  <div>
    <c-button :loading="loading" @click="click">Icon</c-button>
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
			code: `
<template>
  <div>
    <c-button :loading="loading" @click="click">Icon</c-button>
  </div>
</template>

data() {
return {
  loading: true,
},
methods: {
  click() {
  this.loading = !this.loading
  }
}
      `
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

