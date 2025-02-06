import axios from '@/lib/axios'

const verifyIDDocument = async function (payload: FormData) {
  await axios.get('/sanctum/csrf-cookie')
  return axios.post('/api/v1/profile/verifications/id-document', payload)
}

export default {
  verifyIDDocument,
}
