import { useState } from 'react'
import covidLogo from './assets/covidlogo.jpeg'
import CovidData from './components/CovidData'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <CovidData />
    </div>
  )
}

export default App
