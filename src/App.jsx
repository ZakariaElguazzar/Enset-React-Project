import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterLogin from './Components/RegisterLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterLogin>

      </RegisterLogin>
    </>
  )
}
export default App
