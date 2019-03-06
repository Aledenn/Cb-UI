### CB-UI
作者：lcb

[![Build Status](https://www.travis-ci.org/Aledenn/Cb-UI.svg?branch=master)](https://www.travis-ci.org/Aledenn/Cb-UI)

#### 介绍
学习用Vue ui框架
#### 开始使用
1. 添加css样式
  使用本框架前，css中开启border-box
  ```
  *,*::before,*::after{box-sizing:border-box}
  ```
  IE8以上浏览器都支持该样式

2. 安装cb-ui
```
npm i --save lcb-ui
```

3. 引入cb-ui
```
import {Button,ButtonGroup,Icon} from 'lcb-ui'
import 'lcb-ui/dist/index.css'
export default {
  name: 'app',
  components: {
    'c-button':Button,
    'c-icon':Icon
  }
}
```
#### 文档

https://aledenn.github.io/Cb-UI/
