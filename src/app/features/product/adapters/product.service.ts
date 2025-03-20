import axios from '@/lib/axios'
import { getQueryFromFilter } from '@/app/utils/helpers'
import Obj from '@/app/models/product.model'

import type { DBGetQueryFilter } from '@/app/@types/account.interface'

const url = 'api/v1/products'

const getAll = async function getAll(filter?: DBGetQueryFilter) {
  if (!filter) {
    filter = {
      itemsPerPage: -1,
      sortBy: ['products.name'],
    }
  }
  const query = getQueryFromFilter(filter)
  return axios.get(`${url}${query}`)
}

const get = async function get(id: string) {
  return axios.get(`${url}/${id}`)
}

const create = async function (payload: Obj) {
  return axios.post(url, payload.toFormData())
}

const update = async function (payload: Obj) {
  return axios.post(`${url}/${payload.id}?_method=PUT`, payload.toFormData())
}

const destroy = async function (id: string) {
  return axios.delete(`${url}/${id}`)
}

const massDestroy = async function (ids: string[]) {
  return axios.post(`${url}/mass-delete`, { ids })
}

export default {
  getAll,
  get,
  create,
  update,
  destroy,
  massDestroy,
}
