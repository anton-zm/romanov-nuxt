<template>
  <footer class="footer">
    <content-box class="footer__content">
      <p class="footer__address">400081 г.Волгоград ул.Ангарская 100а</p>
      <div class="footer__line"></div>
      <img
        src="../static/a100.jpg"
        alt="Логотип ЖД Романовъ"
        class="footer__logo"
      />
      <div class="footer__line"></div>
      <div class="footer__copyright" id="copyright"></div>
    </content-box>
  </footer>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    'content-box': Content,
  },
  data() {
    return {
      year: ``,
    }
  },
  mounted() {
    const copyright = document.querySelector('#copyright')
    copyright.innerHTML = `2017 - ${new Date().getFullYear()}`
  },
}
</script>

<style scoped>
.footer {
  color: #631616;
  margin: 60px 0 0;
  padding-bottom: 48px;
}
.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__address {
  font-size: 12px;
  margin-bottom: 12px;
}
.footer__line {
  width: 100%;
  height: 1px;
  background-color: #631616;
}
.footer__logo {
  width: 130px;
  height: auto;
  margin: 20px auto;
}
.footer__copyright {
  margin: 20px auto 0;
}
</style>
