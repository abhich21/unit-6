import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPetHouse } from "../redux/action"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Home = () => {
	const [sortData,setSortData]=useState({parameter:"",value:""})

    const dispatch = useDispatch()
    const data = useSelector((store) => store.pethouse)
    useEffect(() => {
        axios.get("http://localhost:5000/pethouse")
            .then((res) => {
            dispatch(addPetHouse(res.data))
            })
            .catch((err) => {
            console.log("error:",err)
        })
    }, [])

    const Table = styled.table`
	margin:auto;
	padding-top:20px
	`
	const Th = styled.th`
	border: 2px solid red;
	padding-right: 50px
	`

	const Td = styled.th`
	border: 2px solid red;
	padding-right: 50px;
	`
	const handleSort = (parameter,value) => {
		setSortData({parameter,value})
	}
    return (
		<>
			<button onClick={()=> handleSort("cost",1)} style={{width:"100px" ,height:"30px", fontSize:"11px"}}>cost low to high</button>
			<button onClick={()=> handleSort("cost",-1)} style={{width:"100px" ,height:"30px", fontSize:"11px"}}>cost high to low</button>
			<button onClick={()=> handleSort("rating",1)} style={{width:"100px" ,height:"30px", fontSize:"11px"}}>rating low to high</button>
			<button onClick={()=> handleSort("rating",-1)} style={{width:"100px" ,height:"30px", fontSize:"11px"}}>rating high to low</button>
           <Table >
		<thead>
			<tr >
				<Th>Sl No.</Th>
				<Th>Name</Th>
				<Th>City</Th>
				<Th>Address</Th>
				<Th>Capacity</Th>
				<Th>Cost</Th>
				<Th>Verified</Th>
				<Th>Rating</Th>
			</tr>
		</thead>
		<tbody >
			{data
			.sort((a,b)=>{
				if(sortData.parameter == "cost" && sortData.value== 1){
						return a.cost-b.cost;
				}
				else if(sortData.parameter == "cost" && sortData.value== -1){
						return b.cost-a.cost;
				}
				else if(sortData.parameter == "rating" && sortData.value== 1){
						return a.rating-b.rating;
				}
				else if(sortData.parameter == "rating" && sortData.value== -1){
						return b.rating-a.rating;
				}
			})
			.map((el) => {
				
				return (
					<tr key={el.id} >

					<Td>{el.id} </Td>
					<Td>
					<Link to={`/listing/${el.id}`} style={{textDecoration: "none", color: "black"}} >{el.name}</Link>
					</Td>
					<Td>{el.city}</Td>
					<Td>{el.address}</Td>
					<Td>{el.capacity}</Td>
					<Td>{el.cost}</Td>
					<Td>{el.verified}</Td>
					<Td>{el.rating}</Td>

				</tr>
				)

			})}
		</tbody>
	</Table>
        </>
    )
}