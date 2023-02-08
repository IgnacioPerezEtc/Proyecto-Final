import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://proyecto-final-production-e80c.up.railway.app/";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
