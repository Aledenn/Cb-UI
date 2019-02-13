import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('c-icon',Icon)
Vue.component('c-button',Button)
Vue.component('c-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data: {
  }
})

import chai from 'chai'

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
  vm.$mount('#test')
  vm.$on('click',function(){
    console.log(1)
  })
  let button = vm.$el
  console.log(button);
  button.click()
  // cButton.$el.remove()
  // cButton.$destroy()
}