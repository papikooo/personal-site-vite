<script setup>
defineProps({
  footer_text: String,
})
</script>

<template>
  <div class="l_footer__inner">
    <p class="footer_text">{{ footer_text }}</p>
  </div>
</template>