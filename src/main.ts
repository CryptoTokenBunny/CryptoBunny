import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Import pages
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Tokenomics from './pages/Tokenomics.vue'
import Roadmap from './pages/Roadmap.vue'
import Contact from './pages/Contact.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/tokenomics', component: Tokenomics },
    { path: '/roadmap', component: Roadmap },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})



const app = createApp(App)
  .use(router);

app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.startsWith('dotlottie-')
  };

app.mount('#app');