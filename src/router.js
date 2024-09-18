import { createRouter, createWebHistory } from 'vue-router'
import Top from '@c/pages/Top.vue'
import Notes from '@c/pages/Notes.vue'
import NoteDetail from '@c/pages/NoteDetail.vue'

const routes = [
	{ path: '/', name: 'Top', component: Top },
	{
    path: '/:category',
    name: 'Notes',
    component: Notes,
    props: true
  },
	{ path: '/notes/detail/:blogId', name: 'NoteDetail', component: NoteDetail },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// ▼ルーティング参考HP
// https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb