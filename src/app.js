import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('c-icon',Icon)
Vue.component('c-button',Button)
Vue.component('c-button-group',ButtonGroup)
Vue.component('c-input',Input)

new Vue({
  el: '#app',
  data: {
    loading1:false
  },
  methods:{
    clg(e){
      console.log('你好啊')
    }
  }
})

import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies)

const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href =useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      loading:true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href =useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} =window.getComputedStyle(svg)  //不渲染没有加载css css所有属性值都是字符串
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      iconPosition:'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} =window.getComputedStyle(svg)  //不渲染没有加载css css所有属性值都是字符串
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})

  vm.$on('click',spy)
  let button = vm.$el

  button.click()
  expect(spy).to.have.been.called()
  // cButton.$el.remove()
  // cButton.$destroy()
}