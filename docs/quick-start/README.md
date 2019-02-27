---
title:快速入门
---
# 快速入门
## 注册使用组件
在Vue中引入并注册组件
```
import {Button,ButtonGroup,Icon} from 'lcb-ui' //引入Button..组件
import 'lcb-ui/dist/index.css'  //引入Css
export default {
  name: 'app',
  components: {
    'c-button':Button,
    'c-icon':Icon
  }
}
```
然后就可以在template中使用它们了
```
<c-button icon='settings'>欢迎使用cb-ui</c-button>
```
## ⚠️注意事项
使用cb-ui时，您需要使用border-box盒模型,否则样式可能与预期不符合
```
*,*::before,*::after{box-sizing:border-box}
```