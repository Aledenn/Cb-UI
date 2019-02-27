<template>
  <div class="box" style="padding:10px;">
    <c-icon name="error" class="red"></c-icon>
    <c-icon name="info" class="grey"></c-icon>
    <c-icon name="download"></c-icon>
    <c-icon name="thumbs-up"></c-icon>
    <c-icon name="settings"></c-icon>
    <c-icon name="right" class="red"></c-icon>
    <c-icon name="left"></c-icon>
    <c-icon name="down"></c-icon>
    <pre><code>{{code}}</code></pre>
  </div>
</template>
<script>
import Icon from '../../../src/icon'
export default {
	components: {
		'c-icon': Icon
	},
	data() {
		return {
			loading: true,
			code: `<c-icon name="error" class="red"></c-icon>
<c-icon name="info" class="grey"></c-icon>
<c-icon name="download"></c-icon>
<c-icon name="thumbs-up"></c-icon>
<c-icon name="settings"></c-icon>
<c-icon name="right" class="red"></c-icon>
<c-icon name="left"></c-icon>
<c-icon name="down"></c-icon>`
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
<style lang="scss">
.box {
	.c-icon {
		width: 50px;
		height: 50px;
	}
}
.red {
	fill: red;
}
.grey {
	fill: grey;
}
</style>


