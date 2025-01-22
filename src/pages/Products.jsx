import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL_PRODUCT } from '../config/constants'

const Products = () => {

  const [products, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = () => {
      axios.get(BASE_URL_PRODUCT)
      .then(data => setProduct(data.data))
      .catch(err => console.log(err)) 
    }

    fetchProduct()
  }, [])
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
        products.length > 0 ?
        products.map((product, i) => (
        <div key={i}
        className='grid grid-cols-6 place-items-center mb-[6px]'>
          <div>{i}</div>
          <div><img src={BASE_URL_PRODUCT+'images/'+product.img} alt="" /></div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>
            <div>sửa</div>
            <div>xóa</div>
          </div>
        </div>)) :
        <div>không có sản phẩm trong cở sở dữ liệu</div>
      }
    </div>
  )
}

export default Products