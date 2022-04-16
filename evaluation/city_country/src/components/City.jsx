import { useState } from "react"
import axios from "axios";
import { addCity } from "../Redux/action";
import { useDispatch } from "react-redux";

export const City = () => {

const [city, setCity] = useState("")
const [country, setCountry] = useState("")
const [population, setPopulation] = useState("")
const dispatch=useDispatch()


const handleSubmit=() => {
	axios.post("http://localhost:5000/cities",{country:country,city:city,population:population}).then((res) => {
		dispatch(addCity(res.data))
	})
	console.log("Country Added")
}


	return <div>
		<h2>Add City</h2>
		<input type="text" placeholder="Enter City" value={city} onChange= {(e) => setCity(e.target.value) } />
		<input type="text" placeholder="Enter Country" value={country} onChange= {(e) => setCountry(e.target.value) } />
		<input type="text" placeholder="Enter Population" value={population} onChange= {(e) => setPopulation(e.target.value) } />
		<button onClick={handleSubmit}>Add</button>
	</div>
}