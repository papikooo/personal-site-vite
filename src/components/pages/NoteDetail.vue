<template>
  <article class="p-article__cont u-fadein">
    <img :src="blog.eyecatch?.url" alt="" class="p-article__mv">
    <h2 class="p-article__ttl">{{ blog.title }}</h2>
    <div v-html="blog.content" class="p-article__inner"/>
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
