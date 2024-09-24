import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  useEffect(() => {
    console.log('Her zaman Çalışır')
  })

  useEffect(() => {
    console.log('İlk render edildiğinde çalışır')
  }, [])

  useEffect(() => {
    console.log('İlk render edildiğinde ve FirstName state değeri değiştirildiğinde çalışır.')
  }, [FirstName])

  useEffect(() => {
    console.log('İlk render edildiğinde ve LastName state değeri değiştirilidğinde çalışır.')
  }, [LastName])


  return (
    <>
      <div>
        <div>
          <button onClick={() => setFirstName('Muhammet')}>
            Adı Değiştir
          </button>
        </div>
        <div>
          <button onClick={() => setLastName('Akduman')}>
            Soyadı Değiştir
          </button>
        </div>
      </div>
    </>
  )
}

export default App
