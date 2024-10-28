<template>
  <section id="notes" class="p-top__container">
    <h2>Notes</h2>
    <div class="c-card__cont"><Note :limit="3" category="notes"/></div>
    <router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>
  </section>

  <section id="works" class="p-top__container">
    <h2>Works</h2>
    <div class="c-card__cont"><Note :limit="3" category="works"/></div>
    <router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>
  </section>

  <section id="games" class="p-top__container">
    <h2>Games</h2>
    <div class="c-card__cont"><Note :limit="3" category="games"/></div>
    <router-link to="/games"><Button button_text="and&nbsp;more..." /></router-link>
  </section>

  <section id="plan" class="p-top__container">
    <h2>Plans</h2>
    <div class="c-card__cont"><Note :limit="3" category="plans"/></div>
    <router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link>
  </section>
</template>

<script>
import Button from '@c/components/Button.vue'
import Note from '@c/components/Note.vue'

export default {
	components: {
    Note,
    Button
  }
}
</script>