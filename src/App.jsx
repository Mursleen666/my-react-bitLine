import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomerPortal from './pages/CustomerPortal'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Transactions from './pages/Transactions'
import Transfer from './pages/Transfer'
import Home from './pages/Home'
import MobileFooter from './components/FooterMobile'
import MenuContent from './pages/MenuContent'
import LoginSignUpFooter from './components/LoginSignUpFooter'
import Footer from './components/Footer'

const App = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    setToken(savedToken || "")
  }, [])

  return (
    <div>
      {token === "" ? (
        <>
          <Routes>
            <Route path="/*" element={<CustomerPortal setToken={setToken} />} />
            <Route path="/menu" element={<MenuContent />} />
          </Routes>
        
         </>
   
       
      ) : (
        <>
          <NavBar token={token} setToken={setToken} />

          <div className='flex w-full'>
            <SideBar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/menu" element={<MenuContent />} />
              </Routes>
            </div>
          </div>
          <Footer/>
          <MobileFooter />
        </>
      )}
    </div>
  )
}

export default App
