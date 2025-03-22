import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Services/Auth.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> {/* Wrap your app inside the AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
