import { createRouter, createWebHistory } from 'vue-router'
import Top from '@c/pages/Top.vue'
import Notes from '@c/pages/Notes.vue'
import Works from '@c/pages/Works.vue'
import Plan from '@c/pages/Plan.vue'
import Article from '@c/pages/Article.vue'

const routes = [
	{ path: '/', name: 'Top', component: Top },
	{ path: '/notes', name: 'Notes', component: Notes },
	{ path: '/notes/:id', name: 'Article', component: Article },
	{ path: '/works', name: 'Works', component: Works },
	{ path: '/plans', name: 'Plan', component: Plan },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// ▼ルーティング参考HP
// https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb