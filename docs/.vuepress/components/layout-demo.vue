<template>
  <div>
    <c-layout class="demo-layout">
      <c-header></c-header>
      <c-content></c-content>
      <c-footer></c-footer>
    </c-layout>

    <c-layout class="demo-layout">
      <c-header></c-header>
      <c-layout>
        <c-sider></c-sider>
        <c-content></c-content>
      </c-layout>
      <c-footer></c-footer>
    </c-layout>

    <c-layout class="demo-layout">
      <c-header></c-header>
      <c-layout>
        <c-content></c-content>
        <c-sider></c-sider>
      </c-layout>
      <c-footer></c-footer>
    </c-layout>

    <c-layout class="demo-layout">
      <c-sider></c-sider>
      <c-layout>
        <c-header></c-header>
        <c-content></c-content>
        <c-footer></c-footer>
      </c-layout>
    </c-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Content from '../../../src/content'
import Footer from '../../../src/footer'
import Sider from '../../../src/sider'

export default {
	components: {
		'c-layout': Layout,
		'c-header': Header,
		'c-content': Content,
		'c-footer': Footer,
		'c-sider': Sider
	}
}
</script>

<style>
.demo-layout {
	margin-bottom: 30px;
}
.c-layout {
	color: white;
}
.c-header,
.c-footer {
	height: 50px;
	background: lightskyblue;
}
.c-content {
	height: 100px;
	background: deepskyblue;
}
.c-sider {
	width: 150px;
	background: #eee;
}
</style>
