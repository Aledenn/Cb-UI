<template>
  <div class="wrapper">
    <input :placeholder="placeholder" type="text">
  </div>
</template>

<script>
export default {
  name:'cInput',
  props:{
    placeholder:{
      type:String,
      default:""
    }
  }
}
</script>

<style lang='scss' scoped>
      // --button-height: 32px;
      // --font-size: 14px;
      // --button-bg: white;
      // --button-active-bg: #eee;
      // --border-radius: 4px;
      // --color: #333;
      // --border-color: #999;
      // --border-color-hover: #666;
  $height:32px;
  $border-color: #999;
  .wrapper{
    > input{
      height: 32px;
      border: 1px solid $border-color;
    }
  }
</style>


