import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router'
import { Home , CoinFlip } from './pages'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} >
      <Route path="/" element={<Home/>} />
      <Route path="/coinflip" element={<CoinFlip/>} />  
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} >
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
)
