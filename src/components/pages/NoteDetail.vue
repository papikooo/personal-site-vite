<template>
  <article class="note_detail">
    <h2>{{ blog.title }}</h2>
    <img :src="blog.eyecatch?.url" alt="">
    <div v-html="blog.content" />
  </article>
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
      }
    }
  }
}
</script>
