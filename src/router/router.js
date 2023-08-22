import { createRouter, createWebHashHistory } from 'vue-router'


import AuthReg from '@/pages/AuthReg.vue'


const routes = [
	{
		path: '/',
		component: AuthReg,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL)
})

export default router;