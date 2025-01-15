import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className='flex-1 border-r-[2px] border-gray-200 sticky top-0 left-0 h-full
    p-3 flex flex-col gap-3'>
      <div className='cursor-pointer'
      onClick={() => navigate('/create')}>Thêm sản phẩm</div>
      <div className='cursor-pointer'
      onClick={() => navigate('/')}>Danh sách sản phẩm</div>
      <div className='cursor-pointer'
      onClick={() => navigate('/users')}>Danh sách người dùng</div>
    </aside>
  )
}

export default memo(Sidebar)