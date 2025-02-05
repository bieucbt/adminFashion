import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_URL } from '../config/constants';
import useToastContext from '../hook/useToastContext';

const EditAccount = () => {

  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState('false')
  const navigate = useNavigate()
  const location = useLocation()
  const userId = location.state
  const { showToast } = useToastContext()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(USER_URL + userId)
      setEmail(res.data.email)
      res.data.isAdmin ? setIsAdmin('true') : setIsAdmin('false')
    }
    fetchData()
  }, [userId])

  const updateUser = async () => {
    const password = newPassword || null
    const data = { email, password, isAdmin }
    try {
      const res = await axios.patch(USER_URL + 'editUser/' + userId, data)

      if (res.status >= 200 && res.status < 300) {
        showToast('success', 'thay đổi thành công')
        navigate('/users')
      }
    } catch (err) {
      showToast('error', 'Đang bị lỗi không thể sửa được thông tin')
    }
  }

  return (
    <form className='p-3'>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' className='inputForm' value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>

      <div className='mt-4'>
        <label htmlFor="password">Thay đổi bằng mật khẩu mới</label>
        <input type="text" id='password' className='inputForm' value={newPassword}
          onChange={e => setNewPassword(e.target.value)} />
      </div>

      <div className='mt-4'>
        <label htmlFor="isAdmin">phân quyền người dùng</label> <br />
        <select id="isAdmin"
          className='mt-2 cursor-pointer'
          value={isAdmin}
          onChange={e => setIsAdmin(e.target.value)}
        >
          <option value="true">Quản trị viên</option>
          <option value="false">Người dùng</option>
        </select>
      </div>

      <div className='text-center'>
        <button type="button" className='btnForm w-[60%] '
          onClick={updateUser}>Thay đổi</button>
      </div>
    </form>
  )
}

export default EditAccount