<script setup>

defineProps({
  button_text: String,
})

</script>
<template>
  <button class="c-button">{{ button_text }}</button>
</template>