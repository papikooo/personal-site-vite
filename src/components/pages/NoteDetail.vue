<template>
  <div>
    <h2>詳細ページ</h2>
    <div class="blog-detail">
      <h3>{{ blog.title }}</h3>
      <img :src="blog.eyecatch?.url" alt="">
      <div v-html="blog.content" />
    </div>
  </div>
</template>

<script>
import { client } from '@/libs/microcms.js'

export default {
  name: 'NoteDetail',
  data() {
    return {
      blog: {}
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      try {
        const blogId = this.$route.params.blogId
        const response = await client.get({
          endpoint: 'notes',
          contentId: blogId
        })
        this.blog = response
      } catch (error) {
        console.error('エラーが発生しました', error)
        // エラーハンドリングのロジックを追加
      }
    }
  }
}
</script>
