# Layout
## 常见布局

**预览**

<ClientOnly>
<layout-demo>
</layout-demo>
</ClientOnly>

**代码**
```
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

  //css 
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
```