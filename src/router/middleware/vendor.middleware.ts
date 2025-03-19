import { useAccountStore } from '@/stores/account.store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function vendor({ next }: any) {
  const accountStore = useAccountStore()
  const notFoundQuery = { path: '/404' }

  if (accountStore.isAuthenticated && accountStore.user?.isVendor()) {
    next()
  } else {
    next(notFoundQuery)
  }
}
