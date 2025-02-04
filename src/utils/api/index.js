import axios from 'axios'
import { USER_URL } from '../../config/constants'

export const getAllUsersApi = () => {
  try {
    const res = axios.get(USER_URL)
    return res
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserApi = (id) => {
  try {
    const res = axios.delete(USER_URL + id)
    return res
  } catch (err) {
    console.log(err.mess)
  }
}
