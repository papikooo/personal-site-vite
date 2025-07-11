<script setup>

// defineProps({
//   button_text: String,
// })
defineProps({
  link_text: String,
  link_url: String
})

</script>
<template>
  <router-link to={{ link_url }}>{{ link_text }}</router-link>
  <!-- <button class="c-button">{{ button_text }}</button> -->
</template>