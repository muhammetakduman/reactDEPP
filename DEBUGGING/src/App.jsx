import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalamaBul = () => {
    debugger
    const toplamSonuc = topla() / 2;
    printer(toplamSonuc);
  }
  const topla = () => {
    const toplam = vize1 + vize2;
    debugger
    return toplam;
  }

  const printer = (toplamSonuc) => {
    debugger
    console.log("Ortalama :" + toplamSonuc)
  }

  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={ortalamaBul}>
          Ortalama Bul
        </button>
      </div>
    </div>
  )
}

export default App
