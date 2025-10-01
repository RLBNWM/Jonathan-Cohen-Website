import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/main.css'
import 'bootstrap/dist/js/bootstrap.js'

import "swiper/css";
import "swiper/css/pagination";

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const api = import.meta.env.BASE_URL;
console.log(api);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={api}>
      <App></App>
    </BrowserRouter>
  </StrictMode>
)
