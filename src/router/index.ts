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
          //主页->待办事项+打卡
          path: '',
          name: 'index',
          component: () => import('@/views/pages/IndexView.vue')
        },
        {
          //笔记->存储笔记
          path: 'note',
          name: 'note',
          component: () => import('@/views/pages/ProfileView.vue')
        },
        {
          //资源->存储资源
          path: 'file',
          name: 'file',
          component: () => import('@/views/pages/FileView.vue')
        },
        {
          //图片->存储图片
          path: 'picture',
          name: 'picture',
          component: () => import('@/views/pages/PictureView.vue')
        },
        {
          //数据看板->存储图片
          path: 'data',
          name: 'data',
          component: () => import('@/views/pages/DataView.vue')
        },
        {
          //用户->个性化设置
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
