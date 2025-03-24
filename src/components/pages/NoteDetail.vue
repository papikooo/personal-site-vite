<template>
  <div v-if="isDataLoaded">
    <article class="p-article__cont">
      <inline-svg :src="blog.eyecatch?.url" class="c-article__icon"/>
      <h2 class="p-article__ttl">{{ blog.title }}</h2>
      <span class="p-article__date">{{ formatDate(blog.publishedAt) }}</span>

      <div class="p-article__toc" v-if="tocHeadings.length">
        <span>目次</span>
        <ul>
          <li v-for="(heading, index) in tocHeadings" :key="heading.id">
            <a :href="'#' + heading.id" @click.prevent="scrollTo(heading.id)">{{ heading.text }}</a>
          </li>
        </ul>
      </div>

      <div v-html="formattedContent" class="p-article__inner"></div>
    </article>
  </div>
</template>

<script>
import { fetchBlogs } from "@/libs/api.js";
import InlineSvg from "vue-inline-svg";

export default {
  name: "NoteDetail",
  data() {
    return {
      blog: {},
      formattedContent: "",
      tocHeadings: [],
      isDataLoaded: false,
    };
  },
  components: {
    InlineSvg,
  },
  async mounted() {
    await this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const blogId = this.$route.params.blogId; // router.jsにて設定したパラメータ:blogIdを取得
        const res = await fetchBlogs({ contentId: blogId }); // blogIdと一致する記事を取得
        if (!res || !res.id) {
          throw new Error("ブログが見つかりません");
        }
        this.blog = res; // 取得した記事をセット
        this.formatContent(this.blog.content); // フォーマット
        this.isDataLoaded = true; // 処理が終わって true とする → 記事を表示
      } catch (error) {
        console.error("エラーが発生しました", error);
      }
    },
    // フォーマット
    formatContent(content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

      Array.from(headings).forEach((heading, index) => {
        const level = parseInt(heading.tagName.slice(1));
        let newTag = "";
        if (level === 1) {
          newTag = "h3";
          const id = `heading_${this.blog.id}_${index}`;
          heading.setAttribute("id", id);
        } else if (level === 2) {
          newTag = "h4";
        } else if (level === 3) {
          newTag = "h5";
        } else {
          newTag = "h6";
        }
        const newHeading = doc.createElement(newTag);
        newHeading.innerHTML = heading.innerHTML;
        newHeading.id = heading.id;
        heading.parentNode.replaceChild(newHeading, heading);
      });

      this.tocHeadings = Array.from(headings)
        .map((heading, index) => {
          if (heading.tagName.toLowerCase() === "h1") {
            return {
              id: `heading_${this.blog.id}_${index}`,
              text: heading.innerText,
            };
          }
        })
        .filter(Boolean);

      this.formattedContent = doc.body.innerHTML;
    },
    // 日付フォーマット
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    },
    // スクロール
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
