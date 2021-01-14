<template>
  <div>
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
