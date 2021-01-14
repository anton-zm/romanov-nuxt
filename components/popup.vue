<template>
  <fade>
    <div @click.self="$emit('closePopup')" class="popup">
      <div class="popup__form">
        <img
          src="/close.png"
          @click="$emit('closePopup')"
          alt="Закрыть"
          class="popup__close"
        />

        <slot></slot>
      </div>
    </div>
  </fade>
</template>

<script>
import fade from '@/components/fade'

export default {
  components: {
    fade,
  },
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 4;
}
.popup__form {
  position: relative;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__close {
  position: absolute;
  top: -33px;
  right: -33px;
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .popup__form {
    width: 80%;
    margin: auto auto;
  }
}
@media screen and (max-width: 600px) {
  .popup__form {
    width: 100%;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .popup__close {
    display: none;
  }
}
</style>
