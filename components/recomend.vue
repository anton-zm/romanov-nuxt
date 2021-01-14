<template>
  <section class="recomend">
    <content-box class="recomend__content">
      <content-title :title="'Соседи рекомендуют'" />
      <p class="recomend__subtitle">
        Проверенные организации с хорошими отзывами
      </p>
      <ul class="recomend__container">
        <li v-for="item in firms" :key="item.img" class="list-item">
          <a :href="item.url" class="recomend__item" target="_blanc">
            <img :src="item.img" :alt="item.alt" class="recomend__item-img" />
          </a>
        </li>
      </ul>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitle from '@/components/content-title'
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
  },
  data() {
    return {
      firms: [
        {
          img: '/firms/hoff.png',
          alt: 'Hoff',
          url: '#',
        },
        {
          img: '/firms/stvorka.jpg',
          alt: 'Створка Окна',
          url: 'https://stvorka34.ru',
        },
        {
          img: '/firms/leroy-merlin.jpg',
          alt: 'Леруа Мерлен',
          url: '#',
        },
        {
          img: '/firms/sinara.png',
          alt: 'Синара девелопмент',
          url: '#',
        },
        {
          img: '/firms/veka.jpg',
          alt: 'Veka',
          url: 'https://veka.ru',
        },
        {
          img: '/firms/zodchiy.jpg',
          alt: 'Зодчий',
          url: '#',
        },
        {
          img: '/firms/logo_mario.svg',
          alt: 'Марио',
          url: '#',
        },
        {
          img: '/firms/obi.png',
          alt: 'Оби',
          url: 'https://obi.ru',
        },
        {
          img: '/firms/torex.jpg',
          alt: 'Торекс',
          url: '#',
        },
        {
          img: '/firms/ikea.jpg',
          alt: 'IKEA',
          url: 'https://ikea.com',
        },
        {
          img: '/firms/maria.png',
          alt: 'Мария кухни',
          url: '#',
        },
        {
          img: '/firms/askona.jpg',
          alt: 'Аскона',
          url: '#',
        },
        {
          img: '/firms/mts.png',
          alt: 'MTC',
          url: 'https://mts.ru',
        },
        {
          img: '/firms/danke.png',
          alt: 'Данке',
          url: '#',
        },
        {
          img: '/firms/macdac.jpg',
          alt: 'McDonalds',
          url: '#',
        },
        {
          img: '/firms/svyasinform.png',
          alt: 'Связьинформ',
          url: '#',
        },
        {
          img: '/firms/yandex-taxi.jpg',
          alt: 'Яндекс.Такси',
          url: 'https://yandex.ru',
        },
      ],
    }
  },
}
</script>

<style scoped>
.recomend {
  width: 100%;
  padding: 40px 0;
}
.recomend__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recomend__subtitle {
  margin-top: 32px;
  color: #635e5e;
}
.recomend__container {
  padding-left: 0;
  width: 100%;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  gap: 20px;
  justify-content: space-between;
}
.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.recomend__item-img {
  width: 100%;
}
</style>
