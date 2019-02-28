<template>
  <transition name="slide">
    <div class="c-sider" v-show="showSider">
      <slot></slot>
      <button class="close" @click="showSider=!showSider">X</button>
    </div>
  </transition>
</template>
<script>
export default {
	name: 'cSider',
	data() {
		return { showSider: true }
	}
}
</script>

<style lang="scss" scoped>
.c-sider {
	position: relative;
	& > .close {
		width: 20px;
		position: absolute;
		top: 0;
		right: 0;
	}
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
	margin-left: -200px;
}
</style>