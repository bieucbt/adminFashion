import React, { useEffect, useState } from 'react'
import { deleteUserApi, getAllUsersApi } from '../utils/api'

const Users = () => {
  const [userData, setUserData] = useState([])
  console.log(userData)
  useEffect(() => {
    getAllUsersApi()
    .then(users => setUserData(users.data))
  }, [])

  function handleDeleteUser(id){
    deleteUserApi(id)
    .then(user => setUserData(prev => {
      return prev.filter(item => item._id != user.data._id)
    }))

  }

  return (
    <div className=''>
      <div className='grid grid-cols-5 place-items-center mb-4'>
        <div>STT</div>
        <div>tên người dùng</div>
        <div>SĐT</div>
        <div>tài khoản</div>
        <div>mật khẩu</div>
        <div>hành động</div>
      </div>
      {
        userData.map((item, i) => (
        <div key={i}
        className='grid grid-cols-5 place-items-center mb-[6px]'>
          <div>{i}</div>
          <div>{item.lastName + ' ' +item.firstName || 'name user'}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
          <div className='overflow-hidden max-w-[200px]'><span className='line-clamp-2 text-ellipsis'>{item.password}</span></div>
          <div className='flex items-center gap-3'>
            <div>sửa</div>
            <div className='cursor-pointer' onClick={() => handleDeleteUser(item._id)}>xóa</div>
          </div>
        </div>))
      }
    </div>
  )
}

export default Users