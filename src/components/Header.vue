<script setup>

defineProps({
  title: String,
})

</script>

<template v-slot:header>
  <nav class="header__inner">
    <h1><a href="/">{{ title }}</a></h1>
    <ul>
      <li>Note</li>
      <li>Works</li>
      <li>Plan</li>
    </ul>
  </nav>
</template>

