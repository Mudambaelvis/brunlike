import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Publications from './pages/Publications'
import People from './pages/People'
import Collaborations from './pages/Collaborations'
import Join from './pages/Join'
import Contact from './pages/Contact'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 pt-16">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/research" element={<Research/>} />
<Route path="/publications" element={<Publications/>} />
<Route path="/people" element={<People/>} />
<Route path="/collaborations" element={<Collaborations/>} />
<Route path="/join" element={<Join/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
)
}