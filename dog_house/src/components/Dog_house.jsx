import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Details = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    useEffect(() => {
        const x = axios.get(`http://localhost:5000/pethouse/${id}`)
            .then((res) => {
                
                setData([res.data])
                console.log("djdh", data)
            })
            .catch((err) => {
            console.log("err:",err)
        })
        
    },[])
    return (
        <>
            <div>
                details
            </div>
            {data.map((el) => {
                return (
                    <>
                        <div>
                    <h3>About {el.name}</h3>
                            <h4>Summary </h4>
                            <br />
                            <p>Boarding Facilities: You leave them we love them</p>
                            <p>No. of pets that will be watched at a time: {Math.floor(el.capacity / 5)}</p>
                            <p>Accepted pet types: "All kind of pet animals"</p>
                            <p>Accepted pet size: "Weight should be below 50KG"</p>
                            <p>Level of adult supervision.</p>
                            <p>Pets will never be left unattended</p>
                            <p>The place your pet will be if they are left unsupervised at home.</p>
                            <p>Free roam of the house</p>
                            <p>The place your pet will sleep at night: "Every pet will have their own sanitized bed"</p>
                            <p>The number of potty breaks provided per day: "5"</p>
                            <p>The number of walks provided per day: "2 to 5"</p>
                            <p>The type of home I stay in: "house"</p>
                            <p>The type of home I stay in.</p>
                            <p>Emergency transport: "{ el.verified}"</p>
                            </div>
                        </>
                )
            })}
        </>
    )
}