<template>
  <section class="paragraph">
    <content-box class="parargraph__content-box">
      <content-title :title="title" />
      <p class="paragraph__content">{{ text }}</p>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitleWhite from '@/components/content-titleWhite'
export default {
  components: {
    'content-box': Content,
    'content-title': ContentTitleWhite,
  },
  props: {
    title: String,
    text: String,
  },
}
</script>

<style scoped>
.paragraph {
  font-size: 1rem;
  line-height: 1.5;
  padding: 40px 0;
  text-align: justify;
}
.parargraph__content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph__content {
  margin-top: 40px;
  color: #ffffff;
}
</style>
