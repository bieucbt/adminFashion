import axios from 'axios'
import { BASE_URL_USER } from '../../config/constants'

export const getAllUsersApi = () => {
  try{
    const res = axios.get(BASE_URL_USER)
    return res
  }catch(err){
    console.log(err)
  }
}

export const deleteUserApi = (id) => {
  try{
    const res = axios.delete(BASE_URL_USER+id)
    return res
  }catch(err){
    console.log(err.mess)
  }
}
