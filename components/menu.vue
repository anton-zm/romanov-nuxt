<template>
  <content-box>
    <ul class="menu" id="header-menu">
      <li
        v-for="link in menu"
        :key="link.href"
        @click="scroll(link.href)"
        class="menu__link"
      >
        {{ link.label }}
      </li>
    </ul>
  </content-box>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    'content-box': Content,
  },
  methods: {
    scroll(id) {
      const site = document.querySelector(`#${id}`)
      site.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  data() {
    return {
      menu: [
        { label: 'О доме', href: 'about' },
        { label: 'Наша УК', href: 'uk' },
        { label: 'Планировки', href: 'flats' },
        { label: 'Чат соседей', href: 'chats' },
        { label: 'Собрания', href: 'meetings' },
      ],
    }
  },
}
</script>

<style scoped>
.menu {
  margin: 0 0 0 auto;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
}
.menu__link {
  text-decoration: none;
  font-weight: 100;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 40px 20px;
  transition: 0.4s;
  cursor: pointer;
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
