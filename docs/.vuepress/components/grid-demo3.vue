<template>
  <div>
    <c-row class="demoRow">
      <c-col
        class="demoCol"
        span="22"
        :phone="{span:24}"
        :ipad="{span:22}"
        :narrow-pc="{span:12}"
        :pc="{span:22}"
        :wide-pc="{span:12}"
      >1</c-col>
      <c-col
        class="demoCol"
        span="2"
        :phone="{span:12}"
        :ipad="{span:2}"
        :narrow-pc="{span:12}"
        :pc="{span:22,offset:2}"
        :wide-pc="{span:12}"
      >2</c-col>
    </c-row>
  </div>
</template>

<script>
import cRow from '../../../src/row'
import cCol from '../../../src/col'
export default {
	components: { cRow, cCol }
}
</script>

<style>
* {
	box-sizing: border-box;
}
.demoRow {
	margin: 10px 0;
}
.demoCol {
	height: 50px;
	border: 1px solid #ccc;
	background: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>