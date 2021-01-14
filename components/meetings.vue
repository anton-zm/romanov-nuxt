<template>
  <section class="meetings" id="meetings">
    <content-box class="meetings__content">
      <content-title :title="'Общие собрания собственников'" />
      <div class="meetings__container">
        <div
          @click="showData(item)"
          v-for="item in meetingsArr"
          :key="item.date"
          class="meeting"
          :class="[{ meeting__active: item.active }]"
        >
          <h3 class="meeting__title">Собрание № {{ item.num }}</h3>
          <p class="meeting__date">от {{ item.date }}</p>
        </div>
      </div>
      <div class="here"></div>
      <div v-if="shown" class="meetings__description">
        <p class="content-text meeting__text">{{ description }}</p>
        <ul class="meeting__questions">
          <li v-for="item in array" :key="item" class="meeting__question">
            {{ item }}
          </li>
        </ul>
        <p class="meeting__result content-text">{{ result }}</p>
      </div>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitle from '@/components/content-titleWhite'
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitle,
  },
  methods: {
    showData(item) {
      this.shown = true
      this.num = item.num
      this.description = item.description
      this.result = item.result
      this.array = item.questions
      this.meetingsArr.forEach((e) => {
        e.active = false
      })
      item.active = true

      this.scroll()
    },
    scroll() {
      const block = document.querySelector('.here')
      block.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  data() {
    return {
      num: '',
      description: '',
      result: '',
      shown: false,
      array: [],
      meetingsArr: [
        {
          active: false,
          num: 1,
          date: '25 февраля 2019 г.',
          description:
            'Это было первое собрание, которое формально было инициировано одним из жильцов, а на самом деле УК. Основными вопросами собрания были:',
          questions: [
            'Выбор управляющей компании',
            'Утверждение тарифов УК на содержание',
            'Утверждение тарифов на видеонаблюдение и автоматические ворота',
            'Утверждение разовых платежей на установку контейнера для мусора',
            'Утверждение тарифов на содержание консьержей',
            'Утверждение Правил проживания',
          ],
          result:
            'Результатом собрания стало утверждение всего предложенного нам управляющей компанией, за исключением пункта о размещении рекламы в лифтах. По этому вопросу собственники проголосовали против.',
        },

        {
          active: false,
          num: 2,
          date: '14 апреля 2019 г.',
          description:
            'Второе собрание было инициировано для выбора совета дома. Были предложены определенные кандидатуры членов совета и его председателя. Также (чтобы 2 раза не вставать) предложено проголосовать по вопросам механизма формирования платежей. Дескать неправильно что-то нам считали и часть собственников выдвина вопрос о пересмотре этих механизмов. Также голосовали за:',
          questions: [
            'Возведение секции забора со стороны дома по ул.Ангарская 108',
            'Изменение платежей за работу консьержей',
          ],
          result:
            'По результатам голосования забор одобрили, а все остальные вопросы, связанные с изменениями и пересмотрами не нашли поддержки большинста собственников.',
        },
        {
          active: false,
          num: 3,
          date: '17 августа 2020 г.',
          description:
            'Собрание было посвящено выбору порядка оплаты взносов в фонд капитального ремонта. Были решены и ряд других текущих вопросов. ',
          questions: [
            'Обустройство мусорно-контейнерной площадки',
            'Определение тарифа за систему распознавания автомобильных номеров при открывании ворот',
            'Изменение и утверждение Правил проживания',
          ],
          result:
            'Собрание решило обустроить контейнерную площадку, одобрило систему распознавания номеров, за капитальный ремонт решено платить на собственный счет. Новые правила также утверждены.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.meetings {
  color: #ffffff;
  line-height: 1.5;
  padding: 40px 0;
  background-image: url('../static/shvonder.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.meetings__content {
  display: flex;
  flex-direction: column;
}

.meetings__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}
.meeting {
  display: flex;
  flex-direction: column;

  border: solid 1px #ffffff;
  border-radius: 3px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
}

.meeting__title {
  font-size: 1.1rem;
  font-weight: 200;
}
.meeting__date {
  font-size: 0.875rem;
}

.meetings__description {
  margin-top: 50px;
}

.meeting__text {
  font-size: 1rem;
}
.meeting__questions {
  margin-top: 25px;
}
.meeting__question {
  margin-top: 15px;
}
.meeting__result {
  margin-top: 25px;
}
.meeting__active {
  background-color: rgba(238, 227, 210, 0.3);
}

@media screen and (max-width: 620px) {
  .meeting {
    padding: 15px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 350px) {
  .meeting {
    padding: 10px;
    margin-right: 10px;
  }
}
</style>
