<template>
  <div class="">
    <article v-for="blog in blogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
    </article>
  </div>
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