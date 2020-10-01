<template>
  <content-box>
    <nav class="menu" id="header-menu">
      <nuxt-link to="/" class="menu__link menu__link_active">Главная</nuxt-link>
      <nuxt-link to="#about" class="menu__link">О доме</nuxt-link>
      <nuxt-link to="#uk" class="menu__link">Наша УК</nuxt-link>
      <nuxt-link to="#plans" class="menu__link">Планировки</nuxt-link>
      <nuxt-link to="#chats" class="menu__link">Чат соседей</nuxt-link>
      <nuxt-link to="#meetings" class="menu__link">Собрания</nuxt-link>
    </nav>
  </content-box>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    'content-box': Content,
  },
}
</script>

<style scoped>
.menu {
  margin: 0 0 0 auto;
  display: flex;
  justify-content: flex-end;
}
.menu__link {
  text-decoration: none;
  font-weight: 100;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 40px 20px;
  transition: 0.4s;
}
.menu__link:last-of-type {
  padding: 40px 0 40px 20px;
}
.menu__link_active {
  border-bottom: 2px solid #ffffff;
}

.menu__link:hover {
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  opacity: 0.7;
}

@media (max-width: 830px) {
  .menu__link {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .menu {
    display: none;
  }
  .menu__link {
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px 0;
  }
  .menu__link:last-of-type {
    padding: 10px 0;
  }
}
</style>
