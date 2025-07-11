import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomerPortal from './pages/CustomerPortal'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Transactions from './pages/Transactions'
import Transfer from './pages/Transfer'
import Home from './pages/Home'

const App = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    setToken(savedToken || "")
  }, [])

  return (
    <div>
      {token === "" ? (
        <CustomerPortal setToken={setToken} />
      ) : (
        <>
          <NavBar token = {token} setToken={setToken}/>

          <div className='flex w-full'>
            <SideBar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/transfer' element={<Transfer />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
