<template>
  <section id="flats">
    <content-box class="flats__content">
      <Paragraph :title="plans.title" :text="plans.text" />
      <img src="/plans.png" alt="Планировки квартир" class="plans" />
      <ul class="plans-list">
        <li class="plans-list-item">квартиры-студии, площадью 31 кв.м</li>
        <li class="plans-list-item">
          однокомнатные квартиры, площадью 36 и 40 кв.м
        </li>
        <li class="plans-list-item">
          двухкомнатные квартиры, площадью 50 , 55, 63 кв.м
        </li>
        <li class="plans-list-item">
          трехкомнатные квартиры, площадью 82 кв.м
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
      plans: {
        text: `Все квартиры имеют остекленную лоджию, санузел. Во всех трехкомнатных квартирах и в двухкомнатных квартирах площадью 63 кв.м предусмотрено два санузла. Основное недовольство у жителей вызывают размеры санузлов, в которые установить можно ванную не более 1600 мм в длину, а также не очень удачное расположение вентиляционных стояков, которые препятствуют проведению коммуникаций.`,
        title: `Планировки квартир`,
      },
    }
  },
}
</script>

<style scoped>
.flats__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plans {
  max-width: 90%;
}
.plans-list {
  margin: 50px auto 0 0;
  color: #635e5e;
}
.plans-list-item {
  margin: 12px auto 0 0;
}
</style>
