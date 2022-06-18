
import  Chart  from './components/Chart/Chart'
import './App.css'
import Card from './components/Card/Card'
import image from "./components/image.png"

function App() {


  return (
    <div className="App">
      <img className='image' src={image} />
      <Card />
      <Chart />
    </div>
  )
}

export default App
