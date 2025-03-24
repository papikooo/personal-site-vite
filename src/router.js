import { createRouter, createWebHistory } from 'vue-router'
import Top from '@c/pages/Top.vue'
import Notes from '@c/pages/Notes.vue'
import NoteDetail from '@c/pages/NoteDetail.vue'

const routes = [
	{ path: '/', name: 'Top', component: Top },
	{ path: '/notes', name: 'Notes', component: Notes, props: { category: 'notes' } },
	{ path: '/works', name: 'Works', component: Notes, props: { category: 'works' } },
	{ path: '/games', name: 'Games', component: Notes, props: { category: 'games' } },
	{ path: '/plans', name: 'Plans', component: Notes, props: { category: 'plans' } },
	// { path: '/:category', name: 'Notes', component: Notes, props: true },
	{ path: '/:category/:blogId', name: 'NoteDetail', component: NoteDetail, props: true },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// ▼ルーティング参考HP
// https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb