import axios from 'axios'

export const getAllUsersApi = () => {
  try{
    const res = axios.get('http://localhost:8000/user/')
    return res
  }catch(err){
    console.log(err)
  }
}

export const deleteUserApi = (id) => {
  try{
    const res = axios.delete('http://localhost:8000/user/'+id)
    return res
  }catch(err){
    console.log(err.mess)
  }
}
