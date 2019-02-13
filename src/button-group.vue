<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'cButtonGroup',
  mounted(){
    for(let node of this.$el.children){
      let {nodeName} = node
      if(nodeName.toLowerCase()!=='button'){
        console.warn(`c-button-group的子元素应该是g-button,但你你写的是${nodeName}`)
      }
    }
  }
}
</script>
<style lang="scss">
  .c-button-group{
    display: inline-flex;
    vertical-align: middle;
    >.c-button{
      border-radius: 0;
      &:not(:first-child){margin-left: -1px;}
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius:var(--border-radius);
      }
      &:last-child{
        border-top-right-radius:var(--border-radius);
        border-bottom-right-radius:var(--border-radius);
      }
      &:hover{
        z-index: 1;
      }
    }
  }
</style>


