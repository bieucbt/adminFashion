import React from 'react'

const Products = () => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-6 place-items-center mb-4'>
        <div>STT</div>
        <div>Hình ảnh</div>
        <div>Tên sản phẩm</div>
        <div>Giá</div>
        <div>Nội dung</div>
        <div>hành động</div>
      </div>
      {
        Array(5).fill(null).map((item, i) => (
        <div key={i}
        className='grid grid-cols-6 place-items-center mb-[6px]'>
          <div>{i}</div>
          <div>Hình ảnh</div>
          <div>Tên sản phẩm {i}</div>
          <div>Giá</div>
          <div>Nội dung</div>
          <div>xóa</div>
        </div>))
      }
    </div>
  )
}

export default Products