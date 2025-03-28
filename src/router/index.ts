import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import middlewarePipeline from './middleware/middlewarePipeline'
import auth from './middleware/auth.middleware'
import guest from './middleware/guest.middleware'
import vendor from './middleware/vendor.middleware'

import { useAppStore } from '@/stores/app.store'

import AppLayout from '@/layouts/app/IndexLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    meta: { middleware: [guest] },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/app/features/home/presentation/IndexView.vue'),
      },
      {
        path: '/forgot-password',
        name: 'account.forgotPassword',
        component: () =>
          import('@/app/features/account/forgot-password/presentation/IndexView.vue'),
      },
      {
        path: '/login',
        name: 'account.login',
        component: () => import('@/app/features/account/login/presentation/IndexView.vue'),
      },
      {
        path: '/register',
        name: 'account.register',
        component: () => import('@/app/features/account/register/presentation/IndexView.vue'),
      },
      {
        path: '/reset-password',
        name: 'account.resetPassword',
        component: () => import('@/app/features/account/reset-password/presentation/IndexView.vue'),
      },
    ],
  },
  /**
   * REGULAR AUTH USERS
   */
  {
    path: '/',
    component: () => import('@/layouts/app/IndexLayout.vue'),
    meta: { middleware: [auth] },
    children: [
      {
        path: '/u',
        children: [
          {
            path: 'profile',
            name: 'user.profile',
            component: () => import('@/app/features/profile/presentation/IndexView.vue'),
          },
        ],
      },
      {
        path: '/p/:id',
        name: 'products.show',
        component: () => import('@/app/features/product/presentation/ShowView.vue'),
      },
      {
        path: '/s/:id',
        name: 'stores.show',
        component: () => import('@/app/features/vendors/store/presentation/ShowView.vue'),
      },
    ],
  },

  /**
   * VENDORS
   */
  {
    path: '/vendors/',
    component: () => import('@/layouts/vendors/IndexLayout.vue'),
    meta: { middleware: [auth, vendor] },
    children: [
      {
        path: '',
        name: 'vendors.index',
        component: () => import('@/app/features/vendors/dashboard/presentation/IndexView.vue'),
      },
      {
        path: 'products/',
        children: [
          {
            path: '',
            name: 'vendors.products.index',
            component: () => import('@/app/features/vendors/product/presentation/IndexView.vue'),
          },
          {
            path: 'create',
            name: 'vendors.products.create',
            component: () => import('@/app/features/vendors/product/presentation/CreateView.vue'),
          },
          {
            path: 'update/:id',
            name: 'vendors.products.update',
            component: () => import('@/app/features/vendors/product/presentation/UpdateView.vue'),
          },
        ],
      },
      {
        path: 'sales',
        name: 'vendors.sales.index',
        component: () => import('@/app/features/vendors/sales/presentation/IndexView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top on navigation
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const middleware: Array<Function> = to.meta.middleware as Array<Function>
  const context = { to, from, next }

  const appStore = useAppStore()
  appStore.setAppLoading(true)

  if (!middleware) {
    return next()
  }

  await middleware[0]({
    ...context,
    next: await middlewarePipeline(context, middleware, 1),
  })
})

router.afterEach(() => {
  const appStore = useAppStore()
  appStore.setAppLoading(false)
})

export default router
