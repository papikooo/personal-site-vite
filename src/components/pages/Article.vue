<template>
  <!-- <div class="">
    <h2>{{ blog.title }}</h2>
    <span>{{ blog.category }}</span>
    <div>
      {{ blog.content }}
    </div>
  </div> -->
</template>

<!-- <script>
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
</script> -->