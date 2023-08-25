import { createRouter, createWebHashHistory } from 'vue-router'


import Main from '@/pages/Main.vue'

import Myinfo from '@/pages/Myinfo.vue'


const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/Myinfo',
		component: Myinfo,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL)
})

export default router;