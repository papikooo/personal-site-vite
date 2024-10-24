<template>
	<div class="l-main__inner u-anime_fadein">
		<h2>Notes</h2>
		<div class="c-card__cont"><Note :limit="3" category="notes"/></div>
		<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>

		<h2>Works</h2>
		<div class="c-card__cont"><Note :limit="3" category="works"/></div>
		<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>

		<h2>Games</h2>
		<div class="c-card__cont"><Note :limit="3" category="games"/></div>
		<router-link to="/games"><Button button_text="and&nbsp;more..." /></router-link>

		<h2>Plan</h2>
		<div class="c-card__cont"><Note :limit="3" category="plans"/></div>
		<router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
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