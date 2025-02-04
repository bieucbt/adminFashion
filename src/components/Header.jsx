import React, { memo, useEffect, useRef } from 'react'
import { HOME_URL } from '../config/constants';

const Header = ({ headerHeight, setHeaderHeight }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight)
  }, [headerHeight])
  return (
    <header ref={headerRef} className='fixed top-0 left-0 right-0 border-b-gray-200 border-[2px] bg-white
    z-50 '>
      <div className='container mx-auto px-4 flex items-center justify-between h-full py-3'>
        <div onClick={() => window.location.href = HOME_URL} >
          <div className='brand'>BieuCBT.</div>
          <div>Admin Panel</div>
        </div>
        <div>
          <span>tài khoản Admin</span>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)