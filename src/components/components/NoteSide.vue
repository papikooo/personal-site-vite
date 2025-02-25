<!-- sidebar -->
<template>
  <ul class="c-sidebar">
    <li v-for="blog in displayedBlogs" :key="blog.id">
      <router-link :to="{ name: 'NoteDetail', params: { blogId: blog.id } }">
        <p>{{ blog.title }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { fetchBlogs } from "@/libs/api.js";
// import '@/libs/scroll.js';

export default {
  name: 'BlogComponent',
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    async getPosts() {
      try {
        const response = await fetchBlogs(); // fetchBlogs() を使用
        this.blogs = response;
      } catch (error) {
        console.error("ブログ取得エラー:", error);
      }
    },
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
  },
  mounted() {
    this.getPosts(); // コンポーネントがマウントされたらブログを取得
  },
}

</script>