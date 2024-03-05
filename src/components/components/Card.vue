<template>
  <article v-for="blog in blogs" :key="blog.id" class="card_box">
    <router-link to="/notes/id:{{blog.id}}">
      <img :src="blog.eyecatch?.url" alt="">
      <div class="card_text">
        <h3>{{ blog.title }}</h3>
        <h4>{{ blog.id }}</h4>
      </div>
    </router-link>
  </article>
</template>

<script>
// SDKの初期化（microCMS）
import { createClient } from 'microcms-js-sdk'

const client = createClient({
	serviceDomain: import.meta.env.VITE_APP_MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.VITE_APP_MICROCMS_API_KEY
});

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