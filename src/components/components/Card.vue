<script setup>

defineProps({
  card_text: String,
})

</script>
<template>
  <div class="card">
    <p><router-link to="">{{ card_text }}</router-link></p>
  </div>
</template>

<!-- 将来的に -->
<!-- 変数で持ってきたリンクでリンクさせたい
（これを使いまわせるようにしたい） -->