import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import CreateTransactionModal from './components/CreateTransactionModal'
import MymenuDashboard from './pages/MymenuDashboard'
import Profile from './pages/Profile'
import Security from './pages/Security'
import Notification from './pages/Notification'

const App = () => {
  const [token, setToken] = useState("")
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [showTransactionModal, setShowTransactionModal] = useState(false)

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    setToken(savedToken || "")
  }, [])

  const location = useLocation()
  const fullScreenRoutes = ['/profile', '/notifications', '/security']
  const isFullScreen = fullScreenRoutes.includes(location.pathname)

  const openDepositModal = () => setShowDepositModal(true)
  const closeDepositModal = () => setShowDepositModal(false)

  const openTransactionModal = () => setShowTransactionModal(true)
  const closeTransactionModal = () => setShowTransactionModal(false)

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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
          <div className="flex flex-1 w-full overflow-hidden">
            <SideBar
              openDepositModal={openDepositModal}
              openTransactionModal={openTransactionModal}
            />
            <main className={`overflow-y-auto flex-grow ${isFullScreen ? 'w-full' : 'w-full lg:w-[70%] px-5 lg:px-0 mx-auto lg:ml-[max(1vw,15px)] mb-0 text-gray-600 text-base'}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/menuDash" element={<MymenuDashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/security" element={<Security />} />
              </Routes>
            </main>
          </div>
        
          <MobileFooter />

          {/* Modals */}
          <DepositModal show={showDepositModal} onClose={closeDepositModal} />
          <CreateTransactionModal show={showTransactionModal} onClose={closeTransactionModal} />
        </>
      )}
    </div>
  )
}

export default App
