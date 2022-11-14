import './App.css'
import { useState } from 'react'
import Navbar from './components/navigations/Navbar'
import Footer from './components/Pages/Footer'
import Routeritems from './components/Router/Routeritems'

function App() {
  const [showNav, setShowNav] = useState(true)
  useState(() => {
    if (sessionStorage.getItem('fullscreen')) {
      return setShowNav(true)
    } else return setShowNav(false)
  })

  return (
    <div>
      <header className="bg-white shadow">
        {showNav && showNav ? <></> : <Navbar />}

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routeritems />
        </div>
      </header>
      {showNav && showNav ? <></> : <Footer />}
    </div>
  )
}

export default App
