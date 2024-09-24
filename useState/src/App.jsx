import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const arttir = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      {count}
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
      <div>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>

  )
}

export default App
