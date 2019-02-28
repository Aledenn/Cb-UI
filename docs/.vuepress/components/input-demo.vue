<template>
  <div>
    <c-input></c-input>
    <c-input value="你好"></c-input>
    <c-input value="你好" disabled></c-input>
    <c-input value="你好" readonly></c-input>
    <c-input @change="change"></c-input>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
	components: {
		'c-input': Input
	},
	methods: {
		change(e) {
			console.log(e)
		}
	}
}
</script>

