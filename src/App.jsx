import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Products from './pages/Products';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';
import CreateProduct from './pages/CreateProduct';
import EditAccount from './pages/EditAccount';
import ToastPovider from './context/ToastPovider';
import './App.css'
import EditProduct from './pages/EditProduct';

function App() {

  const [headerHeight, setHeaderHeight] = useState(0)
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <ToastPovider>
          <Header {...{ headerHeight, setHeaderHeight }} />
          <div className='flex relative h-screen'
            style={{ marginTop: headerHeight + 'px' }}>
            <Sidebar />
            <div className='flex-[3]'>
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/create" element={<CreateProduct />} />
                <Route path="/editAcount" element={<EditAccount />} />
                <Route path="/editProduct" element={<EditProduct />} />
              </Routes>
            </div>
          </div>
        </ToastPovider>
      </BrowserRouter>
    </div >
  )
}

export default App
