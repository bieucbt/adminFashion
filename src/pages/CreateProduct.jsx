import { useState } from "react"
import { useImmer } from "use-immer"
import axios from 'axios'
import InputImgList from "../components/InputImgList";
import TagList from "../components/TagList";

const CreateProduct = () => {
  const [data, setData] = useImmer({
    nameProduct: '',
    price: 0,
    count: 0,
    description: '',
    category: 'Đồ Nam',
    productType: 'Áo khoác'
  })
  const [imgProduct, setImgProduct] = useState('')
  const [listSize, setListSize] = useImmer([])
  const [size, setSize] = useState('')
  const [listColor, setListColor] = useImmer([])
  const [color, setColor] = useState('')

  const handelSubmit = async () => {
    const {nameProduct,
      price,
      count,
      description,
      category,
      productType} = data
    const dataForm = {img: imgProduct,color: JSON.stringify(listColor), size: JSON.stringify(listSize), count, price, description, category,  productType, name: nameProduct}
    const formData = new FormData()
    for(const key of Object.entries(dataForm)){
      formData.append(key[0],key[1])
    }

    // for(const value of formData.entries()){
    //   console.log(value)
    // }
   
  
    try{
      const res = await axios.post('http://localhost:3000/product/', formData)
      console.log(res)
    }catch(err){
      console.log(err)
    }

    
    }
 
  return (
    <div className="p-4">
      <form  encType="multipart/form-data">
        <InputImgList {...{imgProduct, setImgProduct}} />
        <div className="mt-3">
          <label htmlFor="name">Tên sản phẩm</label>
          <input type="text" id='name' className='inputForm' value={data.nameProduct}
          onChange={e => setData(draft => {draft.nameProduct = e.target.value})} />
        </div>
        <div className="mt-3">
          <label htmlFor="price">Giá sản phẩm</label>
          <input type="number" id='price' className='inputForm' value={data.price}
          onChange={e => setData(draft => {draft.price = e.target.value})} />
        </div>
        <div className="mt-3">
          <label htmlFor="count">Số Lượng</label>
          <input type="number" id='count' className='inputForm' value={data.count}
          onChange={e => setData(draft => {draft.count = e.target.value})} />
        </div>
        <TagList label='kích thước' text={size} setText={setSize}  listText={listSize} setListText={setListSize} />
        <TagList label='Màu sắc' text={color} setText={setColor}  listText={listColor} setListText={setListColor} />
        <div className="mt-3">
          <label htmlFor="description">Mô tả</label>
          <textarea type="number" id='description' className='inputForm' value={data.description}
          onChange={e => setData(draft => {draft.description = e.target.value})} />
        </div>
        <div>
          <select onChange={e => setData(draft => {draft.category = e.target.value})}>
            <option value="Đồ Nam">đồ Nam</option>
            <option value="Đồ Nữ">đồ Nữ</option>
            <option value="Phụ Kiện">Phụ kiện</option>
          </select>
        </div>
        <div>
          <select onChange={e => setData(draft => {draft.productType = e.target.value})}>
            <option value="Áo khoác">Áo khoác</option>
            <option value="Áo ngủ">Áo ngủ</option>
            <option value="Áo tắm">Áo tắm</option>
            <option value="Áo thun">Áo Thun</option>
            <option value="Ba lỗ">Ba lỗ</option>
            <option value="Đồ lót">Đồ lót</option>
          </select>
        </div>
        <button type="button" className="btnForm w-[60%]"
        onClick={handelSubmit}>Tạo sản phẩm</button>
      </form>
    </div>
  )
}

export default CreateProduct