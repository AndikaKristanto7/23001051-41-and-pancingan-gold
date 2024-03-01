import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NewBlog from '../views/NewBlog.vue'

Vue.use(VueRouter)

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
    component: AboutView
  },
  {
    path : '/:slug',
    name : 'blog',
    component : BlogView
  },
  {
    path : '/new-blog',
    name : 'new-blog',
    component: NewBlog
  }
]

const router = new VueRouter({
  routes
})

export default router
