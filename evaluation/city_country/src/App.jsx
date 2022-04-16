import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Country } from './components/Country'
import { City } from './components/City'
import { Home } from './components/Home'

function App() {

  return (
    <div className="App">
      <h2>Hello</h2>
      <Routes>
      <Route path='/' element={<Home />}></Route>
        <Route path='/add-country' element={<Country />}></Route>
        <Route path='/add-city' element={<City />}></Route>
      </Routes>
    </div>
  )
}

export default App