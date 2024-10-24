<template>
	<div class="l-main__inner u-anime_fadein">
		<section id="notes" class="p-top__container">
			<h2>Notes</h2>
			<div class="c-card__cont"><Note :limit="3" category="notes"/></div>
			<router-link to="/notes"><Button button_text="and&nbsp;more..." /></router-link>
		</section>

		<section id="works" class="p-top__container">
			<h2>Works</h2>
			<div class="c-card__cont"><Note :limit="3" category="works"/></div>
			<router-link to="/works"><Button button_text="and&nbsp;more..." /></router-link>
		</section>

		<section id="games" class="p-top__container">
			<h2>Games</h2>
			<div class="c-card__cont"><Note :limit="3" category="games"/></div>
			<router-link to="/games"><Button button_text="and&nbsp;more..." /></router-link>
		</section>

		<section id="plan" class="p-top__container">
			<h2>Plan</h2>
			<div class="c-card__cont"><Note :limit="3" category="plans"/></div>
			<router-link to="/plans"><Button button_text="and&nbsp;more..." /></router-link>
		</section>
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
</template>

<script>
import { client } from '@/libs/microcms.js'
import Button from '@c/components/Button.vue'
import Note from '@c/components/Note.vue'

export default {
	components: {
    Note,
    Button
  },
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
    recentBlogs() {
      // ブログを日付順に並び替え、最新5件のみを返す
      return this.blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    }
  }
}
</script>