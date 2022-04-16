import axios from "axios";
import { useState } from "react";

export const City = () => {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [population, setPopulation] = useState("")
    
    const handleSubmit = () => {
        axios.post("http://localhost:5000/cities",{country:country,city:city,population:population})
    }
    return (
        <div>
            <h2>Add City</h2>
            <input type="text" placeholder="Enter City" value={city} onChange= {(e) => setCity(e.target.value) } />
		    <input type="text" placeholder="Enter Country" value={country} onChange= {(e) => setCountry(e.target.value) } />
		    <input type="text" placeholder="Enter Population" value={population} onChange= {(e) => setPopulation(e.target.value) } />
		    <button onClick={handleSubmit}>Add</button>
        </div>
    )
}