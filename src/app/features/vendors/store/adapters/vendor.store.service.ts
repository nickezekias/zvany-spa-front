import axios from '@/lib/axios'
const url = 'api/v1/vendors/stores'

const get = async function get(id: string) {
  return axios.get(`${url}/${id}`)
}

export default { get }
