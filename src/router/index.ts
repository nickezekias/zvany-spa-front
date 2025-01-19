import { createRouter, createWebHistory } from 'vue-router'
import middlewarePipeline from './middleware/middlewarePipeline'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const middleware: Array<Function> = to.meta.middleware as Array<Function>
  const context = { to, from, next }

  if (!middleware) {
    return next()
  }

  await middleware[0]({
    ...context,
    next: await middlewarePipeline(context, middleware, 1),
  })
})

export default router
