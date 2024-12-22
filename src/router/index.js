import { createRouter, createWebHistory } from 'vue-router'
import CreateMood from '../components/CreateMood.vue'
import EditMood from '../components/EditMood.vue'
import ConnectDataToMVC from '../components/ConnectDataToMVC.vue'

const routes = [
  { path: '/CreateMood', name: 'CreateMood', component: CreateMood },
  { path: '/ConnectDataToMVC', name: 'ConnectDataToMVC', component: ConnectDataToMVC },
  { path: '/EditMood/:id', name: 'EditMood', component: EditMood }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
