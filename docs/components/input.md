# Input
## 简单使用
**预览**

<ClientOnly>
<input-demo>
</input-demo>
</ClientOnly>

**代码**
```
    <c-input></c-input>
    <c-input value="你好"></c-input>
    <c-input value="你好" disabled></c-input>
    <c-input value="你好" readonly></c-input>
    <c-input @change="change"></c-input>
```

## 事件
**支持blur、change、blur、focus事件**

## v-model
支持双向绑定

**预览**


<ClientOnly>
<input-demo2>
</input-demo2>
</ClientOnly>

**代码**
```
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

<div>
  <c-input v-model="value"></c-input>
  <p>value:{{value}}</p>
  <button @click="addP">addP</button>
</div>
```