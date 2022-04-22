import { useState } from "react"
import axios from "axios"

export const Form = () => {
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [address,setAddress]=useState("")
    const [capacity, setCapacity] = useState("")
    const [cost, setCost] = useState("")
    const [verified, setVerified] = useState("")
    const [rating, setRating] = useState("")
    
    const handleSubmit = () => {
        axios.post("http://localhost:5000/pethouse",{
            name,
            city,
            address,
            capacity,
            cost,
            verified,
            rating
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log("error",err)
        })
        setName("")
        setCity("")
        setAddress("")
        setCapacity("")
        setCost("")
        setVerified("")
        setRating("")
    }
    return (
        <>
            <div>
                <h1>Enter Pet House Details</h1>
                <input type="text" placeholder="Enter Pethouse name" value={name} onChange={ (e)=> setName(e.target.value)}/>
                <br />
                <input type="text" placeholder="Enter city name" value={city} onChange={ (e)=> setCity(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Enter address" value={address} onChange={ (e)=> setAddress(e.target.value)}/>
                <br />
                <input type="number" placeholder="Enter capacity" value={capacity} onChange={ (e)=> setCapacity(e.target.value)}/>
                <br />
                <input type="number" placeholder="Enter cost per day" value={cost} onChange={ (e)=> setCost(e.target.value)}/>
                <br />
                <input type="text" placeholder="Enter verified status" value={verified} onChange={ (e)=> setVerified(e.target.value)}/>
                <br />
                <input type="number" placeholder="Enter rating" value={rating} onChange={ (e)=> setRating(e.target.value)}/>
                <br />
                <br />
                <input type="submit" placeholder="submit" onClick={handleSubmit}/>
        </div>
        </>
    )
}