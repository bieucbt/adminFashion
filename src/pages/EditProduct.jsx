import React, { useEffect, useState } from 'react'
import TagList from '../components/TagList'
import InputImgList from '../components/InputImgList'
import { useImmer } from 'use-immer'
import useToastContext from '../hook/useToastContext'
import { useLocation } from 'react-router-dom'
import { PRODUCT_URL } from '../config/constants'
import axios from 'axios'

const EditProduct = () => {
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
    const { showToast } = useToastContext()
    const productId = useLocation().state

    useEffect(() => {
        scrollTo({ top: 0, 'behavior': 'smooth' })
        axios.get(PRODUCT_URL + productId)
            .then(res => {
                const dataProduct = res.data

                setData(draft => {
                    draft.category = dataProduct.category
                    draft.count = dataProduct.count
                    draft.description = dataProduct.description
                    draft.nameProduct = dataProduct.name
                    draft.price = dataProduct.price
                    draft.productType = dataProduct.productType
                })
                setListColor(JSON.parse(dataProduct.color))
                setListSize(JSON.parse(dataProduct.size))
                setImgProduct(dataProduct.img)
            })
            .catch(err => showToast('error', err.message))
    }, [])

    const handleSubmit = async () => {

        const { nameProduct,
            price,
            count,
            description,
            category,
            productType } = data
        const dataForm = { img: imgProduct, img2: (typeof imgProduct == 'string' ? imgProduct : ''), color: JSON.stringify(listColor), size: JSON.stringify(listSize), count, price, description, category, productType, name: nameProduct }

        const formData = new FormData()

        for (const key of Object.entries(dataForm)) {
            formData.append(key[0], key[1])
        }


        for (const data of formData.entries()) {
            console.log(data)
        }


        try {
            showToast('loading', 'đang xử lý xin vui lòng đợi!')
            const res = await axios.patch(PRODUCT_URL + productId, formData)
            console.log(res)
            if (res.status >= 200 && res.status < 300) {
                scrollTo({ top: 0, 'behavior': 'smooth' })
                showToast('success', 'Tạo thành công!')
            }
        } catch (err) {
            showToast('error', err.message)
        }

    }

    return (
        <div className='px-4'>
            <h2 className='text-center text-[30px]'>Sửa sản phẩm</h2>
            <form encType="multipart/form-data">
                <InputImgList {...{ imgProduct, setImgProduct }} />
                <div className="mt-3">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text" id='name' className='inputForm' value={data.nameProduct}
                        onChange={e => setData(draft => { draft.nameProduct = e.target.value })} />
                </div>
                <div className="mt-3">
                    <label htmlFor="price">Giá sản phẩm</label>
                    <input type="number" id='price' className='inputForm' value={data.price}
                        onKeyDown={e => {
                            if (e.target.value.toString()[0] == 0)
                                e.target.value = ''

                        }}
                        onChange={e => setData(draft => { draft.price = e.target.value })} />
                </div>
                <div className="mt-3">
                    <label htmlFor="count">Số Lượng</label>
                    <input type="number" id='count' className='inputForm' value={data.count}
                        onKeyDown={e => {
                            if (e.target.value.toString()[0] == 0)
                                e.target.value = ''

                        }}
                        onChange={e => setData(draft => { draft.count = e.target.value })} />
                </div>
                <TagList label='kích thước' text={size} setText={setSize} listText={listSize} setListText={setListSize} />
                <TagList label='Màu sắc' text={color} setText={setColor} listText={listColor} setListText={setListColor} />
                <div className="mt-3">
                    <label htmlFor="description">Mô tả</label>
                    <textarea type="number" id='description' className='inputForm' value={data.description}
                        onChange={e => setData(draft => { draft.description = e.target.value })} />
                </div>
                <div>
                    <select onChange={e => setData(draft => { draft.category = e.target.value })}
                        value={data.category}>
                        <option value="Đồ Nam">đồ Nam</option>
                        <option value="Đồ Nữ">đồ Nữ</option>
                        <option value="Phụ Kiện">Phụ kiện</option>
                    </select>
                </div>
                <div>
                    <select onChange={e => setData(draft => { draft.productType = e.target.value })}
                        value={data.productType}>
                        <option value="Áo khoác">Áo khoác</option>
                        <option value="Áo ngủ">Áo ngủ</option>
                        <option value="Áo tắm">Áo tắm</option>
                        <option value="Áo thun">Áo Thun</option>
                        <option value="Ba lỗ">Ba lỗ</option>
                        <option value="Đồ lót">Đồ lót</option>
                    </select>
                </div>
                <button type="button" className="btnForm w-[60%]"
                    onClick={handleSubmit} >Sửa sản phẩm</button>
            </form>
        </div>
    )
}

export default EditProduct