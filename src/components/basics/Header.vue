<script setup>

defineProps({
  title: String,
})

</script>

<template>
  <nav class="header__inner">
    <h1><router-link to="/">{{ title }}</router-link></h1>
    <ul>
      <li><router-link to="/notes">Notes</router-link></li>
      <li><router-link to="/works">Works</router-link></li>
      <li><router-link to="/plan">Plan</router-link></li>
    </ul>
  </nav>
</template>

