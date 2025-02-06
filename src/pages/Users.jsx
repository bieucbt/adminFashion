import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useToastContext from '../hook/useToastContext';
import { USER_URL } from '../config/constants';
import axios from 'axios';

const Users = () => {
  const [userData, setUserData] = useState([])
  const navigate = useNavigate()
  const { showToast } = useToastContext()

  useEffect(() => {
    axios.get(USER_URL)
      .then(users => setUserData(users.data))
  }, [])

  function handleDeleteUser(id) {
    axios.delete(USER_URL + id)
      .then(user => {
        console.log(user)
        setUserData(prev => {
          showToast('success', 'Xóa thành công')
          return prev.filter(item => item._id != id)
        })
      })
  }

  return (
    <div className='p-4'>
      <div className='grid place-items-center mb-4'
        style={{ gridTemplateColumns: 'auto repeat(3, 1fr)' }}>
        <div className='w-[40px] px-1 text-center'>STT</div>
        <div>email</div>
        <div>mật khẩu</div>
        <div>hành động</div>
      </div>
      {
        userData.length > 0 ?
          userData.map((item, i) => (
            <div key={i}
              className='grid place-items-center mb-[6px] gap-2'
              style={{ gridTemplateColumns: 'auto repeat(3, 1fr)' }}>
              <div className='w-[40px] px-1 text-center'>{i + 1}</div>
              <div>{item.email}</div>
              <div className='w-full text-ellipsis text-wrap overflow-hidden'>{item.password}</div>
              <div className='flex items-center gap-3'>
                <div className='cursor-pointer' onClick={() => navigate('/editAcount', { state: item._id })}>sửa</div>
                <div className='cursor-pointer' onClick={() => handleDeleteUser(item._id)}>xóa</div>
              </div>
            </div>))
          : <div>chưa có tài khoản nào hoặc đang có lỗi!</div>
      }
    </div>
  )
}

export default Users