<template>
  <div class="contacts__map-container">
    <div v-if="overlay" class="map__overlay" @click="closeOverlay"></div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A740bb4439d34945c4f7bbdb61aa343fb41156cd98efa5b151c2112571aff0369&amp;source=constructor"
      width="100%"
      height="400"
      frameborder="0"
      class="iframe-map"
    ></iframe>
  </div>
</template>

<script>
export default {
  methods: {
    closeOverlay() {
      this.overlay = false
    },
    showOverlay() {
      this.overlay = true
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      if (
        !event.target.classList.contains('iframe-map') &&
        !event.target.classList.contains('map__overlay')
      ) {
        this.showOverlay()
      }
    })
  },
  data() {
    return {
      overlay: true,
    }
  },
}
</script>

<style scoped>
.contacts__map-container {
  position: relative;
  width: 100%;
  height: 400px;
}
.map__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
}
</style>
