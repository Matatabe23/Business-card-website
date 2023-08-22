import { createApp } from 'vue'
import App from './App'
import router from './router/router';

import componentUI from '@/Components/UI'

const app = createApp(App)

//Глобально в проекте регестрируем UI, Panel, Other компоненты
const components = [...componentUI];
components.forEach(component => {
	app.component(component.name, component);
});


app
		.use(router)
		.mount('#app');