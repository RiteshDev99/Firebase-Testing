import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageChanges from './components/route'
import AddData from './components/addData'
import Page from './components/page'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageChanges/> } />
        <Route path='/RealTime Data' element={<AddData />} />
        <Route path='/page' element={<Page />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
