<template>
  <header class="header">
    <header-menu />
    <div class="header__line"></div>
    <content-box class="header__headings">
      <h1 class="header__title">Волгоград Ангарская 100а</h1>
      <p class="header__subtitle">романовЪ</p>
      <p class="header__title header__title_under">жилой дом</p>
    </content-box>
  </header>
</template>

<script>
import Menu from '~/components/Menu'
import Content from '~/components/content'
export default {
  components: {
    'header-menu': Menu,
    'content-box': Content,
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 100vh;
  background-image: url(../static/lobby.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.header__line {
  width: 100%;
  opacity: 0.5;
  border: 1px solid #a1a1a1;
  transform: translateY(-2px);
}
.header__headings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.header__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.header__subtitle {
  font-weight: 200;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  width: 75%;
  margin: 20px auto 0;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
}
.header__title_under {
  font-size: 12px;
}
@media (max-width: 768px) {
  .header {
    min-height: 70vh;
  }
  .header__line {
    display: none;
  }
  .header__title {
    font-size: 12px;
  }
  .header__title_under {
    font-size: 10px;
  }
  .header__subtitle {
    font-size: 32px;
  }
}
@media (max-width: 425px) {
  .header__subtitle {
    font-size: 24px;
  }
}
</style>
