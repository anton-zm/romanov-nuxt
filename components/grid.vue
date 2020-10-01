<template>
  <section>
    <content-box class="photo">
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.url"
        :alt="photo.alt"
        :id="photo.id"
        class="photo-item"
      />
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
export default {
  components: { 'content-box': Content },
  data() {
    return {
      photos: [
        {
          url: '/flats.jpg',
          alt: 'Список квартир по этажам',
          id: 'item1',
        },
        {
          url: '/lobby.jpg',
          alt: 'Фойе первого этажа',
          id: 'item2',
        },
        {
          url: '/photo_2018-12-19_14-35-38.jpg',
          alt: 'Стена',
          id: 'item3',
        },
        {
          url: '/hall.jpg',
          alt: 'На первом этаже',
          id: 'item4',
        },
        {
          url: '/photo_2019-01-19_10-02-10.jpg',
          alt: 'Лифты',
          id: 'item5',
        },
        {
          url: '/night-view.jpg',
          alt: 'Вид на город ночью',
          id: 'item6',
        },
        {
          url: '/ch-zone.jpg',
          alt: 'На детской площадке',
          id: 'item7',
        },
        {
          url: '/post-cell.jpg',
          alt: 'Почтовые ящики',
          id: 'item8',
        },
        {
          url: '/new-year.jpg',
          alt: 'Украшения фойе к новому году',
          id: 'item9',
        },
        {
          url: '/head-up.jpg',
          alt: 'Вид снизу',
          id: 'item10',
        },
        {
          url: '/lightning.jpg',
          alt: 'Молния. Вид из окна',
          id: 'item11',
        },
        {
          url: '/parking.jpg',
          alt: 'Парковка',
          id: 'item12',
        },
        {
          url: '/photo_2019-02-01_13-02-32.jpg',
          alt: 'Зона отдыха',
          id: 'item13',
        },
        {
          url: '/birdflight-view.jpg',
          alt: 'Фото с дрона',
          id: 'item14',
        },
        {
          url: '/mirror.jpg',
          alt: 'Зеркало в лифтовом холле',
          id: 'item15',
        },
        {
          url: '/section.jpg',
          alt: 'Площадка на этаже',
          id: 'item16',
        },
        {
          url: '/birdflight-view2.jpg',
          alt: 'Еще одно фото с дрона',
          id: 'item17',
        },
        {
          url: '/pawwash.jpg',
          alt: 'Лапомойка',
          id: 'item18',
        },
        {
          url: '/angarskaya-view.jpg',
          alt: 'Вид на ул.Ангарскую',
          id: 'item19',
        },
      ],
    }
  },
}
</script>

<style scoped>
.photo {
  width: 100%;
  margin: 100px auto 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  min-height: 700px;
  grid-gap: 5px;
}

.photo-item {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;
}

#item1 {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
}

#item2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

#item4 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}

#item5 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
}

#item14 {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 3;
  grid-column-end: 4;
}

#item7 {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
}

#item9 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 4;
}

#item13 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
}

#item19 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}

.photo-item:hover {
  transform: scale(1.3);
}

@media (max-width: 1024px) {
  .photo {
    display: flex;
    flex-wrap: wrap;
  }
  .photo-item {
    max-width: 280px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .photo {
    display: flex;
    flex-direction: column;
  }
  .photo-item {
    max-width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
  .item1 {
    display: none;
  }
}
</style>
