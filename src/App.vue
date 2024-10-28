<script setup>
import Header from '@c/basics/Header.vue'
import Footer from '@c/basics/Footer.vue'
</script>

<template>
  <div class="l-container">
    <header>
      <Header title="Personal Site" />
    </header>
    <main>
      <div class="l-main__inner">
      <router-view />
      </div>
      <div class="p-main__blognav">
        <ul class="p-main__bloglist">
          <li v-for="blog in recentBlogs" :key="blog.id" class="p-main__bloglink">
            <span class="p-main__blogdate">{{ formatDate(blog.publishedAt) }}</span>
            <router-link :to="{ name: 'NoteDetail', params: { category: blog.category, blogId: blog.id } }">
              {{ blog.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <Footer footer_text="&copy;nm" />
    </footer>
  </div>
</template>
<script>
import { client } from '@/libs/microcms.js'

export default {
	data() {
    return {
      blogs: []
    }
  },
	mounted() {
    this.getPosts()
  },
	methods: {
    // Note.vueのgetPostsを流用
    getPosts() {
      const queries = { limit: 100 }; // 全ブログ取得
      client.get({
        endpoint: 'notes',
        queries
      })
      .then((res) => {
        this.blogs = res.contents;
      })
      .catch((err) => {
        console.error('Error fetching posts:', err)
      })
    },
		formatDate(dateString) {
			const date = new Date(dateString);
			return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
		}
  },
	computed: {
    // サイドナビ：最新記事
    recentBlogs() {
      // ブログを日付順に並び替え、最新5件のみを返す
      return this.blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    }
  }
}
</script>