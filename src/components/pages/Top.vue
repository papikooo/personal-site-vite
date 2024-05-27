<script setup>
import Button from '@c/components/Button.vue'
import Note from '@c/components/Note.vue'
</script>

<template>
	<div class="l-main__inner">
		<h2>Notes</h2>
		<div class="c-card__cont"><Note :limit="3"/></div>
		<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>

		<h2>Works</h2>
		<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>

		<h2>Plan</h2>
		<router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
</template>