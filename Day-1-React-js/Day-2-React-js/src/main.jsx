import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Back from './Back.jsx'
import Task from './Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Task/> */}
    {/* <Back/> */}
    <App/>
    {/* <Home/>
    <Home/>
    <Home/>
    <Home/>
    <Back/> */}
  </StrictMode>,
)
