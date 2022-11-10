import './App.css'
import NavItems from './components/navigations/NavItem'
import Footer from './components/Pages/Footer'

import Routeritems from './components/Router/Routeritems'

function App() {
  return (
    <div>
      <NavItems />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routeritems />
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default App
