<script setup>

defineProps({
  title: String,
})

</script>

<template>
  <header>
    <nav class="header__inner">
      <h1><router-link to="/">{{ title }}</router-link></h1>
      <ul>
        <li><router-link to="/notes">Notes</router-link></li>
        <li>Works</li>
        <li>Plan</li>
      </ul>
    </nav>
  </header>
</template>

