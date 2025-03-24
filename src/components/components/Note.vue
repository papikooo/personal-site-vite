<template>
  <article v-for="blog in displayedBlogs" :key="blog.id" class="c-card__item">
    <router-link :to="{ name: 'NoteDetail', params: { category: category, blogId: blog.id } }">
      <inline-svg :src="blog.eyecatch?.url" class="c-article__icon"/>
      <div class="c-card__txt">
        <h3>{{ blog.title }}</h3>
        <div class="p-card__date">{{ formatDate(blog.publishedAt) }}</div>
        <span v-for="tag in blog.tags" :key="tag.id" class="c-card__tags">{{ tag.name }}</span>
      </div>
    </router-link>
  </article>
</template>

<script>
import { fetchBlogs } from "@/libs/api.js";
import '@/libs/scroll.js';
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'Note',
  components: {
    InlineSvg
  },
  props: {
    limit: {
      type: Number,
      default: null
    },
    category: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      blogs: []
    };
  },
  async mounted() {
    await this.getNotes();
    window.dispatchEvent(new Event("scroll"));
  },
  methods: {
    async getNotes() {
      try {
        const params = {};
        if (this.category) {
          params.category = this.category; // カテゴリがある場合のみセット
        }

        const res = await fetchBlogs(params);
        this.blogs = res.contents || [];
        this.isDataLoaded = true;

        window.dispatchEvent(new Event("scroll"));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 2桁表示
      const day = String(date.getDate()).padStart(2, '0'); // 2桁表示
      return `${year}.${month}.${day}`;
    }
  },
  computed: {
    displayedBlogs() {
      if (!Array.isArray(this.blogs)) {
        console.error("Error: blogs is not an array", this.blogs);
        return [];
      }

      return this.limit ? this.blogs.slice(0, this.limit) : this.blogs;
    }
  }
};
</script>
