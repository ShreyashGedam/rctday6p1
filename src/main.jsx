import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/themcontext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  
)
