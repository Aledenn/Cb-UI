# Grid
## 24 栅格系统
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

## 设置gutter空隙

<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

**代码**
```
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
```
## 响应式



<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

**代码**

```
<div>
    <c-row class="demoRow">
      <c-col
        class="demoCol"
        span="22"
        :phone="{span:24}"
        :ipad="{span:22}"
        :narrow-pc="{span:12}"
        :pc="{span:22}"
      >1</c-col>
      <c-col
        class="demoCol"
        span="2"
        :phone="{span:12}"
        :ipad="{span:2}"
        :narrow-pc="{span:12}"
        :pc="{span:22,gutter:2}"
      >2</c-col>
    </c-row>
  </div>
```
## API
**Rol**
| 参数 | 说明 |
| --- | ---|
| align|flex 布局下的垂直对齐方式：top right center	|
| gutter|col间的间隔， 单位为px|
**Col**
| 参数 | 说明 |
| --- | ---|
| phone | <576px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
|ipad | ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象|
|narrow-pc| ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象|
| pc| ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| span | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格|
**响应式参考了antd**