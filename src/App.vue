<script setup>
import Header from '@c/basics/Header.vue'
import Footer from '@c/basics/Footer.vue'
</script>

<template>
  <div class="container">
    <header>
      <Header title="Personal Site" />
    </header>
    <div>
      <main>
        <router-view />
      </main>
      <footer>
        <Footer footer_text="&copy;nm" />
      </footer>
    </div>
  </div>
</template>