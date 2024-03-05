import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectDetailView from '../views/ProjectDetailView.Vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project/:projectId', // Gunakan parameter dinamis untuk id proyek
    name: 'projectdetail',
    component: ProjectDetailView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFoundView
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

export default router
