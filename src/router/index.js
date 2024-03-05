import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Bagzmn Portfolio'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView,
    meta: {
      title: 'About | Bagzmn Portfolio'
    }
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView,
    meta: {
      title: 'Project | Bagzmn Portfolio'
    }
  },
  {
    path: '/project/:projectId', // Gunakan parameter dinamis untuk id proyek
    name: 'projectdetail',
    component: ProjectDetailView,
    meta: {
      title: 'Project Detail | Bagzmn Portfolio'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact | Bagzmn Portfolio'
    }
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFoundView,
    meta: {
      title: 'Not Found'
    }
  },
  {
    path: '/:catchAll(.*)', // Place the wildcard route at the end
    redirect: '/404'
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});

export default router
