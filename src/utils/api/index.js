import axios from 'axios'
import { BASE_URL } from '../../config/constants'

export const getAllUsersApi = () => {
  try{
    const res = axios.get(BASE_URL)
    return res
  }catch(err){
    console.log(err)
  }
}

export const deleteUserApi = (id) => {
  try{
    const res = axios.delete(BASE_URL+id)
    return res
  }catch(err){
    console.log(err.mess)
  }
}
