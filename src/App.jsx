import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quadro from './Components/Quadro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Quadro></Quadro>
    </div>
  )
}

export default App
