import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //展示
      path: '/',
      name: 'dashBoard',
      component: () => import('@/views/DashboardView.vue'),
      children: [
        {
          //主页
          path: '',
          name: 'index',
          component: () => import('@/views/pages/IndexView.vue')
        },
        {
          //文档
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/pages/ProfileView.vue')
        },
        {
          //工具
          path: 'tool',
          name: 'tool',
          component: () => import('@/views/pages/ToolView.vue')
        },
        {
          //图片
          path: 'picture',
          name: 'picture',
          component: () => import('@/views/pages/PictureView.vue')
        },
        {
          //用户
          path: 'user',
          name: 'user',
          component: () => import('@/views/pages/UserView.vue')
        }
      ]
    },
    {
      //登录
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      //404处理
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
