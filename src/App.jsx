import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';
import CreateProduct from './pages/CreateProduct';
import EditAccount from './pages/EditAccount';

function App() {
  
  const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <div className='h-screen'>
      <BrowserRouter>
        <Header {...{headerHeight, setHeaderHeight}} />
        <div className='flex relative h-screen'
        style={{marginTop: headerHeight+'px'}}>
          <Sidebar />
          <div className='flex-[3]'>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/editAcount" element={<EditAccount />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
