<template>
  <c-button-group>
    <c-button icon="left"></c-button>
    <c-button icon="right"></c-button>
  </c-button-group>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
	components: {
		'c-button-group': ButtonGroup,
		'c-button': Button
	}
}
</script>

