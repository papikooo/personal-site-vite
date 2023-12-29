<script setup>
import Button from '@/components/Button.vue'

// defineProps({
// 	title: String,
// })

</script>

<template>
	<div class="top_fv">
    <img src="/assets/images/common/main_dummy.png" alt="">
	</div>
	<h2>Notes</h2>
	<p>Hello World!</p>
	<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>
	<h2>Works</h2>
	<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>
	<h2>Plan</h2>
	<router-link to="/plan"><Button button_text="and&nbsp;more..." /></router-link>
</template>