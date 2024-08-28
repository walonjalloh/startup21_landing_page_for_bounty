import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Page from './pages/Page'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Page/>
      <Footer/>
    </div>
  )
}

export default App