import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PRODUCT_URL, CLOUDINARY_URL } from '../config/constants'
import useToastContext from '../hook/useToastContext'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const [products, setProduct] = useState([])
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = () => {
      axios.get(PRODUCT_URL)
        .then(data => setProduct(data.data))
        .catch(err => console.log(err))
    }

    fetchProduct()
  }, [])

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(PRODUCT_URL + id)
      if (res.status >= 200 && res.status < 300) {
        setProduct(products.filter(product => product._id != id))
        showToast('success', 'xoá thành công')
      } else {
        showToast('error', 'có lỗi xảy ra, xóa thất bại')
      }
    } catch (err) {
      showToast('error', err.message)
    }
  }

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
              <div>{i + 1}</div>
              <div><img src={CLOUDINARY_URL + product.img} alt="img product" /></div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.description}</div>
              <div className='flex items-center gap-3 '>
                <div className='cursor-pointer' onClick={() => navigate('/editProduct', { state: product._id })}>sửa</div>
                <div className='cursor-pointer' onClick={() => handleDeleteProduct(product._id)}>xóa</div>
              </div>
            </div>)) :
          <div>không có sản phẩm trong cở sở dữ liệu</div>
      }
    </div>
  )
}

export default Products