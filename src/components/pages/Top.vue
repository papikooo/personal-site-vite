<script setup>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'

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
		<p>Hello World!</p>
		<div class="card_area">
			<Card card_text="テスト"/>
		</div>
		<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
	<div class="inner">
		<h2>Works</h2>
		<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
	<div class="inner">
		<h2>Plan</h2>
		<router-link to="/plan"><Button button_text="and&nbsp;more..." /></router-link>
	</div>
</template>