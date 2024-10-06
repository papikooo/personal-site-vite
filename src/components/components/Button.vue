<script setup>

defineProps({
  button_text: String,
})

</script>
<template>
  <button class="c-">{{ button_text }}</button>
</template>