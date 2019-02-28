<template>
  <div>
    <c-input v-model="value"></c-input>
    <p>value:{{value}}</p>
    <button @click="addP">addP</button>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
	components: {
		'c-input': Input
	},
	data() {
		return {
			value: 'hi'
		}
	},
	methods: {
		addP(e) {
			this.value += 'p'
		}
	}
}
</script>

