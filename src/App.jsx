import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterLogin from './Components/RegisterLogin'
import { AuthProvider } from './Services/Auth'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/registerlogin" element={<RegisterLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
    </>
  )
}
export default App
