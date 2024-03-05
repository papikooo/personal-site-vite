import { createRouter, createWebHistory } from 'vue-router'
import Top from '@c/pages/Top.vue'
import Notes from '@c/pages/Notes.vue'
import NoteDetail from '@c/pages/NoteDetail.vue'
import Works from '@c/pages/Works.vue'
import Plans from '@c/pages/Plans.vue'

const routes = [
	{ path: '/', name: 'Top', component: Top },
	{ path: '/notes', name: 'Notes', component: Notes },
	{ path: '/notes/:id', name: 'NoteDetail', component: NoteDetail },
	{ path: '/works', name: 'Works', component: Works },
	{ path: '/plans', name: 'Plans', component: Plans },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// ▼ルーティング参考HP
// https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb