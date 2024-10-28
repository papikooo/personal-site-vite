<template>
  <section :id="category" :class="`l-${category}__inner`">
    <h2>{{ categoryName }}</h2>
    <div class="c-card__cont">
      <Note :key="category" :category="category" />
    </div>
  </section>
</template>

<script>
import Note from '@c/components/Note.vue'

export default {
  name: 'Notes',
  components: {
    Note
  },
  // props で category を受け取る
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    categoryName() {
      // props から category を取得して表示する名前を決定
      switch (this.category) {
        case 'notes': return 'Notes'
        case 'works': return 'Works'
        case 'games': return 'Games'
        case 'plans': return 'Plans'
        default: return 'Unknown'
      }
    }
  },
}
</script>