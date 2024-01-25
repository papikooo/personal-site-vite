<template>
  <router-link to="/article">
    <article v-for="blog in blogs" :key="blog.id" class="card_box">
      <img src="/assets/images/common/main_dummy.png" alt="">
      <div class="card_text">
        <h3>{{ blog.title }}</h3>
      </div>
    </article>
  </router-link>
</template>

<script>
import { createClient } from 'microcms-js-sdk'
const client = createClient({ serviceDomain: 'ch1988npen', apiKey: '0DWMpqw4zQlkVFpjFLwUFKS2ez9ADRv6ltra' })

export default {
  name: 'BlogComponent',
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    // getPosts
    getPosts() {
      client.get({
        endpoint: 'notes'
      })
      .then((res) => {
        this.blogs = res.contents
      })
    }
  }
}
</script>

<!-- 将来的に -->
<!-- 変数で持ってきたリンクでリンクさせたい
（これを使いまわせるようにしたい） -->