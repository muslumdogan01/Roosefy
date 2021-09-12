import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newTemplateDesign from '../views/new-template-design'
import templateCanvasStory from '../views/canvas-pages/template-canvas-story'
import templateCanvasPost from '../views/canvas-pages/template-canvas-post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: "*", redirect: "/", },
  {
    path: '/new-template-design',
    name: 'new-template-design',
    component: newTemplateDesign
  },
  {
    path:'/template-canvas-story',
    name:'template-canvas-story',
    component: templateCanvasStory
  },
  {
    path:'/template-canvas-post',
    name:'template-canvas-post',
    component: templateCanvasPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
