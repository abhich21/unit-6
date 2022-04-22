
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home'
import { Details } from './components/Dog_house'
import { Form } from './components/Form'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/listing/:id' element={<Details />}></Route>
        <Route path='/listing/create' element={<Form/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
