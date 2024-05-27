<template>
  <article v-for="blog in displayedBlogs" :key="blog.id" class="c-card__cont-box">
    <router-link :to="{ name: 'NoteDetail', params: { blogId: blog.id } }">
      <img :src="blog.eyecatch?.url" alt="">
      <div class="c-card__cont-txt">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.category.name }}</span>
      </div>
    </router-link>
  </article>
</template>

<script>
import { client } from '@/libs/microcms.js';
import '@/libs/scroll.js';

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
  },
  // 表示数調整
  // Note.vueに表示するブログの数をpropsとして渡す
  props: {
    limit: {
      type: Number,
      default: null
    }
  },
  computed: {
    displayedBlogs() {
      return this.limit ? this.blogs.slice(0, this.limit) : this.blogs;
    }
  }
}

</script>