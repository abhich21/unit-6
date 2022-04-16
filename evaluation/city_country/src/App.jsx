
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Country } from './components/Country'
import { City } from './components/City'

function App() {

  return (
    <div className="App">
      <h2>Hello</h2>
      <Routes>
        <Route path='/country' element={<Country />}></Route>
        <Route path='/city' element={<City />}></Route>
      </Routes>
    </div>
  )
}

export default App