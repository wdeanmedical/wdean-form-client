import axios from 'axios'
import { API_URL } from '../constants/constants'

class API {
  static async getForm() {
    const data = await axios
      .get(`${API_URL}/public/getForm`)
      .then(result => result.data.form)
    return data
  }
}

export default API
