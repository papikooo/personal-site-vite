<script setup>
import Header from '@c/basics/Header.vue'
import Footer from '@c/basics/Footer.vue'
</script>

<template>
  <header>
    <Header title="Personal Site" />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer footer_text="&copy;nm" />
  </footer>
</template>