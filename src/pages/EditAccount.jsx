import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { BASE_URL } from '../config/constants';

const EditAccount = () => {
  
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState('client')
  const navigate = useNavigate()
  const location = useLocation()
  const userId = location.state

  
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(BASE_URL+userId)
      setEmail(res.data.email)
      res.data.isAdmin ? setIsAdmin('admin') : setIsAdmin('client')
    }
    fetchData()
  }, [userId])

  const updateUser = async () => {
    const password = newPassword || null
    const data = {email, password,  isAdmin}
    try{
      const res = await axios.put(BASE_URL+'editUser/'+userId, data)
      navigate('/users')
    }catch(err){
      console.log(err)
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
          <option value="admin">Quản trị viên</option>
          <option value="client">Người dùng</option>
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