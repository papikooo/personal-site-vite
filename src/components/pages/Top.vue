<script setup>
import Button from '@/components/components/Button.vue'
import Card from '@/components/components/Card.vue'

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
			<Card />
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