<template>
  <div class="wrapper" :class="{error}">
    <input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      type="text"
    >
    <template v-if="error">
      <c-icon name="error" class="icon-error"></c-icon>
      <span class="errorMsg">{{error}}</span>
    </template>
  </div>
</template>

<script>
import cIcon from "./icon";

export default {
  components: { cIcon },
  name: "cInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss' scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-block;
  vertical-align: middle;
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 8px 9px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: 0 1px 3px $box-shadow-color inset;
    }
    &[disabled],
    &[readonly] {
      border-color: #ddd;
      color: #ddd;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMsg {
    color: $red;
  }
}
</style>


