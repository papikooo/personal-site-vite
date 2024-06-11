<template>
  <article class="p-article__cont u-fadein">
    <img :src="blog.eyecatch?.url" alt="" class="p-article__mv">
    <h2 class="p-article__ttl">{{ blog.title }}</h2>
    <div class="p-article__toc">
      <span>目次</span>
      <ul>
        <li v-for="(heading, index) in tocHeadings" :key="index">
          <a :href="'#' + heading.id">{{ heading.text }}</a>
        </li>
      </ul>
    </div>
    <div v-html="blog.content" class="p-article__inner"/>
  </article>
</template>

<script>
import { client } from '@/libs/microcms.js'

export default {
  name: 'NoteDetail',
  data() {
    return {
      blog: {},
      tocHeadings: [] //目次用
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      try {
        const blogId = this.$route.params.blogId
        const response = await client.get({
          endpoint: 'notes',
          contentId: blogId
        })
        this.blog = response
        this.extractHeadings(response.content)  // 目次を抽出
      } catch (error) {
        console.error('エラーが発生しました', error)
      }
    },
    // 目次
    extractHeadings(html) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const headings = doc.querySelectorAll('h3')
      const tocHeadings = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`
        heading.setAttribute('id', id)  // 各見出しにユニークなIDを設定
        return { id, text: heading.innerText }
      })
      this.tocHeadings = tocHeadings

      // 見出しにIDを設定したHTMLを更新
      this.blog.content = doc.body.innerHTML
    }
  }
}
</script>
