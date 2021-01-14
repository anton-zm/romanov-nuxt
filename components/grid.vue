<template>
  <section>
    <content-box class="photo">
      <img
        @click="openPopup(photo.url)"
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.url"
        :alt="photo.alt"
        :id="photo.id"
        class="photo-item"
      />
      <Popup v-if="popup" @closePopup="togglePopup"
        ><img :src="popupImg" class="popupImg"
      /></Popup>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import Popup from '@/components/popup'
export default {
  components: { 'content-box': Content, Popup },
  methods: {
    openPopup(img) {
      this.popupImg = img
      this.togglePopup()
    },
    togglePopup() {
      this.popup = !this.popup
    },
  },
  data() {
    return {
      popup: false,
      popupImg: ``,
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
  column-count: 4;
  column-gap: 5px;
}

.photo-item {
  width: 100%;
  cursor: pointer;
}
.popupImg {
  max-width: 100%;
  max-height: 95vh;
}

@media (max-width: 768px) {
  .photo {
    column-count: 3;
    margin: 20px auto;
  }
}
</style>
