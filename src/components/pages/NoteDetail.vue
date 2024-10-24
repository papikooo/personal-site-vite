<template>
  <div v-if="isDataLoaded">
    <article class="p-article__cont u-anime_fadein">
      <inline-svg :src="blog.eyecatch?.url" class="c-article__icon"/>
      <h2 class="p-article__ttl">{{ blog.title }}</h2>
      <span class="p-article__date">{{ formatDate(blog.publishedAt) }}</span>
      <div class="p-article__toc">
        <span>目次</span>
        <ul>
          <li v-for="(heading, index) in tocHeadings" :key="index">
            <a :href="'#' + heading.id" @click.prevent="scrollTo(heading.id)">{{ heading.text }}</a>
          </li>
        </ul>
      </div>
      <div v-html="formattedContent" class="p-article__inner"/>
    </article>
  </div>
  <!-- ローディング実装する場合 -->
  <!-- <div v-else class="u-anime_loading">
    <div class="loading_cont">
      <div class="bouncy"></div>
    </div>
  </div> -->
</template>

<script>
import { client } from '@/libs/microcms.js'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'NoteDetail',
  data() {
    return {
      blog: {},
      formattedContent: '', //htmlフォーマット
      tocHeadings: [], //目次用
      isDataLoaded: false // データが読み込まれたかどうか
    }
  },
  components: {
    InlineSvg
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
        this.formatContent(response.content) // コンテンツをフォーマット
        this.isDataLoaded = true // データ取得完了
      } catch (error) {
        console.error('エラーが発生しました', error)
      }
    },
    // フォーマット（見出しを変換、目次抽出）
    formatContent(content) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(content, 'text/html')
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')

      // 見出しのレベルに応じてタグを変換
      Array.from(headings).forEach((heading, index) => {
        const level = parseInt(heading.tagName.slice(1))
        let newTag = ''
        if (level === 1) {
          newTag = 'h3'
          // 見出し1にユニークなIDを付ける
          const id = `heading_${index}`
          heading.setAttribute('id', id)
        } else if (level === 2) {
          newTag = 'h4'
        } else if (level === 3) {
          newTag = 'h5'
        } else {
          newTag = 'h6'
        }
        const newHeading = doc.createElement(newTag)
        newHeading.innerHTML = heading.innerHTML
        newHeading.id = heading.id
        heading.parentNode.replaceChild(newHeading, heading)
      })
      // 目次（見出し1のみ）
      const tocHeadings = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.slice(1))
        if (level === 1) {
          const id = `heading_${index}`
          heading.setAttribute('id', id)
          return { id, text: heading.innerText }
        }
      }).filter(Boolean)
      this.tocHeadings = tocHeadings

      this.formattedContent = doc.body.innerHTML
    },
    // フォーマット（日付）
    formatDate(dateString) {
			const date = new Date(dateString);
			return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
		},
    // スムーズスクロール
    scrollTo(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
