<template>
  <section id="notes" class="u-anime_fadein">
    <h2>{{ categoryName }}</h2>
    <div class="c-card__cont">
      <Note :key="categoryId" :category="categoryId" />
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