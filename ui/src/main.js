/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// Plugins
import { registerPlugins } from '~/plugins'

//Styles
import './styles/main.css'

const app = createApp(App)

registerPlugins(app)

// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
app.use(router)

app.mount('#app')
