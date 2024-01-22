<script setup>

defineProps({
  button_text: String,
})

</script>
<template>
  <button>{{ button_text }}</button>
</template>