

const CreateProduct = () => {
  return (
    <form>
      <div>
        <label htmlFor="file">Tải ảnh</label>
        <img src="" alt="product" id="img" />
        <input type="file" id="file" />
      </div>
      <div>
        <label htmlFor="nameProduct">Tên sản phẩm</label>
        <input type="text" id="nameProduct" placeholder="Nhập tên sản phẩm" />
      </div>
      <div>
        <label htmlFor="nameProduct">Giá sản phẩm</label>
        <input type="number" id="nameProduct" placeholder="Nhập tên sản phẩm" />
      </div>
      <button>Tạo sản phẩm</button>
    </form>
  )
}

export default CreateProduct