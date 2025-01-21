import { useState } from "react"
import { useImmer } from "use-immer"
import axios from 'axios'
import InputImgList from "../components/InputImgList";
import TagList from "../components/TagList";

const CreateProduct = () => {
  const [imgProduct, setImgProduct] = useState('')
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)
  const [listSize, setListSize] = useImmer([])
  const [size, setSize] = useState('')
  const [listColor, setListColor] = useImmer([])
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')

  const handelSubmit = async () => {
   //, listSize, listColor
    const data = {imgProduct, nameProduct, price: Number(price),count: Number(count), description}
    const formData = new FormData()
    for(const key of Object.entries(data)){
      formData.append(key[0],key[1])
    }
  
    try{
      const res = await axios.post('http://localhost:8000/product/', formData)
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
          <input type="text" id='name' className='inputForm' value={nameProduct}
          onChange={e => setNameProduct(e.target.value)} />
        </div>
        <div className="mt-3">
          <label htmlFor="price">Giá sản phẩm</label>
          <input type="number" id='price' className='inputForm' value={price}
          onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="mt-3">
          <label htmlFor="count">Số Lượng</label>
          <input type="number" id='count' className='inputForm' value={count}
          onChange={e => setCount(e.target.value)} />
        </div>
        <TagList label='kích thước' text={size} setText={setSize}  listText={listSize} setListText={setListSize} />
        <TagList label='Màu sắc' text={color} setText={setColor}  listText={listColor} setListText={setListColor} />
        <div className="mt-3">
          <label htmlFor="description">Mô tả</label>
          <textarea type="number" id='description' className='inputForm' value={description}
          onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="button" className="btnForm w-[60%]"
        onClick={handelSubmit}>Tạo sản phẩm</button>
      </form>
    </div>
  )
}

export default CreateProduct