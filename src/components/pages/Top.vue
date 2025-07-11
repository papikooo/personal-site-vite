<template>
  <section id="notes" class="p-top__container">
    <h2 class="p-notes__title">Notes</h2>
    <div class="c-card__cont"><Note :limit="3" category="notes"/></div>
    <div class="c-button">
      <router-link to="/notes" class="c-button__link"><span class="c-button__text">and&nbsp;more...</span></router-link>
    </div>
    <!-- <router-link to="/notes" class="u-align-right"><Button button_text="and&nbsp;more..." /></router-link> -->
  </section>

  <section id="works" class="p-top__container">
    <h2 class="p-works__title">Works</h2>
    <div class="c-card__cont"><Note :limit="3" category="works"/></div>
    <div class="c-button">
      <router-link to="/works" class="c-button__link"><span class="c-button__text">and&nbsp;more...</span></router-link>
    </div>
    <!-- <router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link> -->
  </section>

  <section id="games" class="p-top__container">
    <h2 class="p-games__title">Games</h2>
    <div class="c-card__cont"><Note :limit="3" category="games"/></div>
    <div class="c-button">
      <router-link to="/games" class="c-button__link"><span class="c-button__text">and&nbsp;more...</span></router-link>
    </div>
    <!-- <router-link to="/games"><Button button_text="and&nbsp;more..." /></router-link> -->
  </section>

  <section id="plan" class="p-top__container">
    <h2 class="p-plans__title">Plans</h2>
    <div class="c-card__cont"><Note :limit="3" category="plans"/></div>
    <div class="c-button">
      <router-link to="/plans" class="c-button__link"><span class="c-button__text">and&nbsp;more...</span></router-link>
    </div>
    <!-- <router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link> -->
  </section>
</template>

<script>
// import Button from '@c/components/Button.vue'
import Note from '@c/components/Note.vue'

export default {
	components: {
    Note,
    // Button
  }
}
</script>