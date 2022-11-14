import './App.css'
import Navbar from './components/navigations/Navbar'
import Footer from './components/Pages/Footer'
import Routeritems from './components/Router/Routeritems'
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <div>
      <header className="bg-white shadow">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routeritems />
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default App
