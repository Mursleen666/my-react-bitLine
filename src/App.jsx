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
import DepositModal from './components/DepositModal'
import CreateTransactionModal from './components/CreateTransactionModal' // 🆕 import
import MymenuDashboard from './pages/MymenuDashboard'

const App = () => {
  const [token, setToken] = useState("")
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [showTransactionModal, setShowTransactionModal] = useState(false) // 🆕 state

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    setToken(savedToken || "")
  }, [])

  const openDepositModal = () => setShowDepositModal(true)
  const closeDepositModal = () => setShowDepositModal(false)

  const openTransactionModal = () => setShowTransactionModal(true) // 🆕
  const closeTransactionModal = () => setShowTransactionModal(false) // 🆕

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
            <SideBar
              openDepositModal={openDepositModal}
              openTransactionModal={openTransactionModal} // 🆕 pass to SideBar
            />
            <div className='w-full lg:w-[70%] px-5 lg:px-0 mx-auto lg:ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/menuDash" element={<MymenuDashboard/>} />
              </Routes>
            </div>
          </div>
          <Footer />
          <MobileFooter />

          {/* Modals */}
          <DepositModal show={showDepositModal} onClose={closeDepositModal} />
          <CreateTransactionModal show={showTransactionModal} onClose={closeTransactionModal} /> {/* 🆕 */}
        </>
      )}
    </div>
  )
}

export default App
