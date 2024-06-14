<template>
  <article v-for="blog in displayedBlogs" :key="blog.id" class="c-card__cont-box">
    <router-link :to="{ name: 'NoteDetail', params: { blogId: blog.id } }">
      <inline-svg :src="blog.eyecatch?.url" class="c-article__icon"/>
      <div class="c-card__cont-txt">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.category.name }}</span>
      </div>
    </router-link>
  </article>
</template>

<script>
import { client } from '@/libs/microcms.js'
import '@/libs/scroll.js'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'BlogComponent',
  data() {
    return {
      blogs: []
    }
  },
  components: {
    InlineSvg
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
        endpoint: 'notes'
      })
      .then((res) => {
        this.blogs = res.contents;
        this.$nextTick(() => {
          // DOMの更新後にスクロールイベントを手動でトリガー
          window.dispatchEvent(new Event('scroll'));
        });
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