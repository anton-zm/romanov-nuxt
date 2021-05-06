<template>
  <section class="chats" id="chats">
    <ParagraphWhite :title="chats.title" :text="chats.text" :color="'white'" />
    <content-box>
      <div class="social-icons-block">
        <div class="social-links">
          <img
            class="social-icons"
            src="/tlg_log.png"
            alt="Иконка telegram"
            @click="tlg"
          />
        </div>
        <div class="social-links">
          <img
            class="social-icons"
            src="/wa-log.png"
            alt="Иконка WhatsApp"
            @click="wa"
          />
        </div>
        <a
          class="social-links"
          href="https://vk.com/zhk_romanov"
          target="_blank"
          ><img class="social-icons" src="/vk-log.png" alt="Иконка Вконтакте"
        /></a>
      </div>
      <div class="chats__join">
        {{ joinText }}
      </div>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import ParagraphWhite from '@/components/paragraphWhite'
export default {
  components: {
    'content-box': Content,
    ParagraphWhite,
  },
  methods: {
    wa() {
      this.joinText = this.joinWa
    },
    tlg() {
      this.joinText = this.joinTlg
    },
  },
  data() {
    return {
      joinText: ``,
      joinTlg: `Группа в Telegram является закрытой и в ней общаются только подтвержденные соседи.
    Для того, чтобы присоединиться к ним, нужно указать свое имя, номер квартиры. Это лучше сделать электрическим письмом на stvorka34@mail.ru с темой письма "Чат Telegram".
     Если Вы  не являетесь пока нашим соседом или хотите общаться анонимно, то Вам лучше пойти в чат WhatsApp. Там всех берут.`,
      joinWa: `В группу WhatsApp принимают всех желающих.
    Для того, чтобы присоединиться к обсуждению в этой группе, нужно указать только свой номер телефона. Это лучше сделать электрическим письмом на stvorka34@mail.ru с темой письма "Чат WhatsApp".  Админ группы добавит.`,
      chats: {
        text: `Многие соседи активно общаются в соцсетях или в чатах. Нам известно о
        трёх сообществах. Часть соседей общается в WhataApp, часть в Telegram, а
        часть и там и там. Также есть группа ВКонтакте. Все чаты закрыты от
        посторонних. Если Вы наш сосед и впервые об этом узнали, жмите на нужную
        иконку и Добро пожаловать!`,
        title: `Общение соседей`,
      },
    }
  },
}
</script>

<style scoped>
.chats {
  background-color: #854915;
  padding: 80px 0;
}

.social-icons-block {
  width: 30%;
  margin: 50px auto 10px;
  display: flex;
  justify-content: space-between;
}
.social-links {
  cursor: pointer;
}
.social-icons {
  border-radius: 10px;
  width: 50px;
  height: auto;
}

.social-links:hover {
  transform: scale(1.05);
}

.chats__join {
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 40px;
}

@media (max-width: 940px) {
  .social-icons-block {
    width: 80%;
  }
}
</style>
