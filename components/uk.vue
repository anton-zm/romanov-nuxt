<template>
  <section class="uk" id="uk">
    <content-box>
      <Paragraph :title="uk.title" :text="uk.text" />
      <h3 class="emergency-title">Контакты дежурных и аварийных служб</h3>
      <ul class="emergency-list">
        <li class="emergency-list__items">
          Аварийно-диспетчерская служба УК: (8442) 25-01-00
        </li>
        <li class="emergency-list__items">
          Мастер дома: Ирина Викторовна 8 (961) 671-51-59
        </li>
        <li class="emergency-list__items">Консьерж: (8442) 55-18-11</li>
        <li class="emergency-list__items">
          Сантехник: Виктор 8 (937) 566-00-93
        </li>
        <li class="emergency-list__items">
          Центральный офис УК "ТЭРА": (8442) 26-45-24
        </li>
      </ul>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import Paragraph from '@/components/paragraph'
export default {
  components: {
    'content-box': Content,
    Paragraph,
  },
  data() {
    return {
      uk: {
        title: 'Управляющая компания',
        text: `Управление нашим домом осуществляет Управляющая компания «ТЭРА». Организовано постоянное нахождение сотрудников УК на территории ЖД «Романовъ». Консьержи работают круглосуточно, мастер УК, сантехник и дворник находятся всегда в рабочее время. Уборщицы также работают весь день, поэтому в доме очень чисто. Управляющая компания по мнению жильцов очень грамотно ведет свою хозяйственную деятельность. Также хочется отметить, что на новогодние праздники наша УК организовала для детей праздник и ёлку, украсила дом и территорию, что всем очень понравилось.`,
      },
    }
  },
}
</script>

<style scoped>
.uk {
  background-color: rgb(12, 0, 0, 0.1);
  padding: 40px 0;
}
.emergency-title {
  margin: 50px auto 0;
  width: 50%;
  text-align: center;
  color: #635e5e;
}

.emergency-list {
  margin: 40px auto 0;
  width: 50%;
  color: #635e5e;
}

.emergency-list__items {
  margin: 15px auto 0;
}

@media (max-width: 424px) {
  .emergency-title {
    margin: 30px auto 0;
    width: 80%;
  }
  .emergency-list {
    margin: 20px auto 0;
    width: 70%;
  }
}
</style>
