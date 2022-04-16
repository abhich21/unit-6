
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home";
import { City } from "./components/City"
import {Country} from "./components/Country"

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}></Route>
        <Route path='/add-country' element={<Country />}></Route>
        <Route path='/add-city' element={<City />}></Route>
      </Routes>
    </div>
  )
}

export default App