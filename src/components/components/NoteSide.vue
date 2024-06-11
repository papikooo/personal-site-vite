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
import { client } from '@/libs/microcms.js';
// import '@/libs/scroll.js';

export default {
  name: 'BlogComponent',
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    // this.getPosts()
    // // 初期ロード時にもスクロールイベントを発火させる
    // window.dispatchEvent(new Event('scroll'));
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