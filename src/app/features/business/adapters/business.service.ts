import axios from '@/lib/axios'
import Obj from '@/app/models/business.model'

const url = 'api/v1/businesses'

const updateCoverImage = async function (payload: Obj) {
  const formData = new FormData()
  formData.append('coverImage', payload.coverImage)
  return axios.post(`${url}/${payload.id}/cover-image?_method=PUT`, formData)
}

const updateLogo = async function (payload: Obj) {
  const formData = new FormData()
  console.log('THE LOGO', payload.logo)
  formData.append('logo', payload.logo)
  return axios.post(`${url}/${payload.id}/logo?_method=PUT`, formData)
}

export default { updateCoverImage, updateLogo }
