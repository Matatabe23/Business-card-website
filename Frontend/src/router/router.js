import { createRouter, createWebHashHistory } from 'vue-router'


import Main from '@/pages/Main.vue'

import Myinfo from '@/pages/Myinfo.vue'

import portfolio from '@/pages/portfolio.vue'


const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/Myinfo',
		component: Myinfo,
	},
	{
		path: '/portfolio',
		component: portfolio,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL)
})

export default router;