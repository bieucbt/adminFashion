import React from 'react'
import { memo } from 'react'
import { FaFileAlt } from "react-icons/fa";

const InputImgList = ({ imgProduct, setImgProduct, isProductImg, setIsProductImg }) => {
  const isProductImgURL = isProductImg || false

  return (
    <div>
      <label htmlFor="file">
        Tải ảnh
        {/* <div className="cursor-pointer">{imgProducts.length > 0 ? <div className="flex items-center flex-wrap">
        {
          imgProducts.map((img, i) => <img key={i} src={URL.createObjectURL(img)} className="w-[100px]" />)
        }
      </div> : <FaFileAlt size={50} />}</div> */}
        <div className="cursor-pointer">
          {imgProduct ? <img src={isProductImgURL ? imgProduct : URL.createObjectURL(imgProduct)} className="w-[100px]" /> : <FaFileAlt size={50} />}
        </div>
      </label>
      <input type="file" id="file" className="hidden" name="imgs"
        onChange={e => {
          // set false để chuyển qua lấy đường link ảnh tạm thời từ constructor URL
          isProductImgURL && setIsProductImg(false)
          setImgProduct(e.target.files[0])
        }} />
    </div>
  )
}

export default memo(InputImgList)