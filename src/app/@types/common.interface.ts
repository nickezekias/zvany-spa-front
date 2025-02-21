interface DBGetQueryFilter {
  sortBy: Array<string>
  itemsPerPage?: number
  sortDesc?: Array<string>
  page?: number
}

interface MenuItem {
  label: string
  icon?: string
  route?: string
  children?: Array<MenuItem>
  command?: () => void
}

export type { DBGetQueryFilter, MenuItem }
