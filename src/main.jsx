import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/lexend/700.css"; // Load Lexend with weight 700
import "@fontsource/zain"; // Defaults to weight 400
import "@fontsource/zain/300.css"; // Specific weight 300
import "@fontsource/zain/700.css"; // Specific weight 700
import "@fontsource/zain/900.css"; // Specific weight 900


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
