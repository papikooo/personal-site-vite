import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/pages/Top.vue'
import Notes from '@/pages/Notes.vue'
import Works from '@/pages/Works.vue'
import Plan from '@/pages/Plan.vue'

const routes = [
	{ path: '/', name: 'Top', component: Top },
	{ path: '/notes', name: 'Notes', component: Notes },
	{ path: '/works', name: 'Works', component: Works },
	{ path: '/plan', name: 'Plan', component: Plan },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// ▼ルーティング参考HP
// https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb