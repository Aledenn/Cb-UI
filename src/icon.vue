<template>
    <svg class="c-icon">
      <use v-bind:xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
  props:{
    name:{
      type:String,
      validator(value){
        return value
      }
    }
  }
}
</script>
<style lang="scss">
    .c-icon {
      width: 1em;
      height: 1em;
    }
</style>


