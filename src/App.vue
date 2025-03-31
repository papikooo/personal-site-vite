<template>
  <div class="l-container l-container--back">
    <header class="l-header">
      <Header title="Personal Site" />
    </header>
    <main class="l-main">
      <div class="l-main__inner">
        <router-view :key="$route.params.blogId"></router-view>
      </div>
      <div class="p-main__blognav">
        <ul class="p-main__bloglist">
          <li v-for="blog in recentBlogs" :key="blog.id" class="p-main__bloglink">
            <span class="p-main__blogdate">{{ formatDate(blog.publishedAt) }}</span>
            <router-link :to="{ name: 'NoteDetail', params: { category: blog.category.id, blogId: blog.id } }">
              {{ blog.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </main>
    <footer class="l-footer">
      <Footer footer_text="&copy;nm" />
    </footer>
  </div>
</template>
<script>
  import { fetchBlogs } from "@/libs/api.js"
  import Header from '@c/basics/Header.vue'
  import Footer from '@c/basics/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        blogs: []
      }
    },
    mounted() {
      this.getPosts();
    },
    methods: {
      // 記事取得
      async getPosts() {
        try {
          const res = await fetchBlogs({ limit: 100 }) // 全ブログ取得
          this.blogs = res.contents
        } catch (err) {
          console.error('Error fetching posts:', err)
        }
      },
      // 日付のフォーマット
      formatDate(dateString) {
        const date = new Date(dateString)
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
      }
    },
    computed: {
    // 最新5件の記事（降順ソート）
      recentBlogs() {
        const sortedBlogs = [...this.blogs]
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .slice(0, 5);
        return sortedBlogs;
      }
    }
  }
</script>
