<template>
  <article v-for="blog in displayedBlogs" :key="blog.id" class="c-card__cont-box">
    <router-link :to="{ name: 'NoteDetail', params: { blogId: blog.id } }">
      <inline-svg :src="blog.eyecatch?.url" class="c-article__icon"/>
      <div class="c-card__cont-txt">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.category?.name }}</span>
      </div>
    </router-link>
  </article>
</template>

<script>
import { client } from '@/libs/microcms.js'
import '@/libs/scroll.js'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Note',
  components: {
    InlineSvg
  },
  // propsとして渡す
  props: {
    // Note.vueに表示するブログの数
    limit: {
      type: Number,
      default: null
    },
    // カテゴリ
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.getPosts()
    // 初期ロード時にもスクロールイベントを発火させる
    window.dispatchEvent(new Event('scroll'));
  },
  methods: {
    // getPosts
    getPosts() {
      client.get({
        endpoint: 'notes',
        queries: {
          filters: `category[equals]${this.category}`,  // カテゴリフィルター
          limit: this.limit
        }
      })
      .then((res) => {
        this.blogs = res.contents;
        this.$nextTick(() => {
          // DOMの更新後にスクロールイベントを手動でトリガー
          window.dispatchEvent(new Event('scroll'));
        });
      })
      .catch((err) => {
        console.error('Error fetching posts:', err)
      })
    }
  },
  computed: {
    displayedBlogs() {
      return this.limit ? this.blogs.slice(0, this.limit) : this.blogs;
    }
  }
}
</script>