<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <c-row class="demoRow" gutter="10">
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
    </c-row>
    <c-row class="demoRow" gutter="10">
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
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