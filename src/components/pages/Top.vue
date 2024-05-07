<script setup>
import Button from '@c/components/Button.vue'
import Note from '@c/components/Note.vue'

// defineProps({
// 	title: String,
// })

</script>

<template>
	<div class="top_fv">
		<img src="/assets/images/common/fv_dummy.jpg" alt="">
	</div>
	<div class="inner">
		<h2>Notes</h2>
		<p>備忘録</p>
		<div class="card_area">
			<Note />
		</div>
		<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
	<div class="inner">
		<h2>Works</h2>
		<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
	<div class="inner">
		<h2>Plan</h2>
		<router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
</template>