<template>
  <div class="go-up go-up_hidden" @click="goUp">
    <div class="arrow">&#10148;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', function () {
      const btn = document.querySelector('.go-up')

      if (pageYOffset > 500) {
        btn.classList.remove('go-up_hidden')
      } else {
        btn.classList.add('go-up_hidden')
      }
    })
  },
  methods: {
    goUp() {
      this.scrollTo(0, 400)
    },
    scrollTo(to, duration = 700) {
      const element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
          t /= d / 2
          if (t < 1) return (c / 2) * t * t + b
          t--
          return (-c / 2) * (t * (t - 2) - 1) + b
        },
        animateScroll = function () {
          const currentDate = +new Date()
          const currentTime = currentDate - startDate
          element.scrollTop = parseInt(
            easeInOutQuad(currentTime, start, change, duration)
          )
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll)
          } else {
            element.scrollTop = to
          }
        }
      animateScroll()
    },
  },
}
</script>

<style scoped>
.go-up {
  width: 30px;
  height: 30px;
  background-color: #546cf7;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 200;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.8;
  padding-bottom: 2px;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.go-up:hover {
  opacity: 1;
}
.arrow {
  color: white;
  text-align: center;
  margin: 0;
}
.go-up_hidden {
  display: none;
}
</style>
