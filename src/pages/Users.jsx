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
      <div className='grid grid-cols-6 place-items-center mb-4'
      style={{gridTemplateColumns: 'auto repeat(5, 1fr)'}}>
        <div className='w-[40px] px-1 text-center'>STT</div>
        <div>tên người dùng</div>
        <div>SĐT</div>
        <div>tài khoản</div>
        <div>mật khẩu</div>
        <div>hành động</div>
      </div>
      {
        userData.map((item, i) => (
        <div key={i}
        className='grid place-items-center mb-[6px] gap-2'
        style={{gridTemplateColumns: 'auto repeat(5, 1fr)'}}>
          <div className='w-[40px] px-1 text-center'>{i}</div>
          <div className='w-full overflow-hidden text-ellipsis'>{item.lastName + ' ' +item.firstName || 'name user'}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
          <div className='w-full text-ellipsis text-wrap overflow-hidden'>{item.password}</div>
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