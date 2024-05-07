<template>
  <article v-for="blog in blogs" :key="blog.id" class="card_box">
    <router-link :to="{ name: 'NoteDetail', params: { blogId: blog.id } }">
      <img :src="blog.eyecatch?.url" alt="">
      <div class="card_text">
        <h3>{{ blog.title }}</h3>
        <h4>{{ blog.id }}</h4>
      </div>
    </router-link>
  </article>
</template>

<script>
import { client } from '@/libs/microcms.js'

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