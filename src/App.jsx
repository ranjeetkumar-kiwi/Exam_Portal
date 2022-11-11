import './App.css'
import PrivateRoutes from './components/navigations/PrivateRoutes'
import PublicRoutes from './components/navigations/PublicRoutes'
import Footer from './components/Pages/Footer'

import Routeritems from './components/Router/Routeritems'

function App() {
  const token = localStorage.getItem('authToken')

  const handleNavItem = () => {
    if (token) return <PrivateRoutes />
    else return <PublicRoutes />
  }

  return (
    <div>
      <header className="bg-white shadow">
        {handleNavItem()}
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routeritems />
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default App
