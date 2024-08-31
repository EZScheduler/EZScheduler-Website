import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home';
import { Blog } from './pages/blog/Blog'
import { Pricing } from './pages/pricing/Pricing'
import { Contact } from './pages/contact/Contact'
import { Waiting } from './pages/waiting/Waiting'
import { PrivacyPolicy } from './pages/privacy/PrivacyPolicy'
import { CookiePolicy } from './pages/cookie/CookiePolicy'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Waiting />} /> */}
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
      </Routes>
    </>
  )
}

export default App