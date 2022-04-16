import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../Redux/action";

export const Home =() => {
	const cities= useSelector((store) => {
		return store.city
	})
const dispatch= useDispatch();

	useEffect(() => {
		getData();
	},[])

	const getData = () => {
		axios.get("http://localhost:5000/cities")
		.then((res) => {
			console.log("Data", res.data)
			dispatch(addCity(res.data))
			
		})
		
    }
    
    const handleDelete=(id) => {
		console.log("Delete")
		axios.delete(`http://localhost:5000/cities/${id}`).then(() => {
			getData();
		})
	}

	return <div>
		<table>
        <thead>
          <tr>
            <th>Sl.NO</th>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>

			<tbody>
          {cities.map((el, i) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.country}</td>
				<td>{el.city}</td>
                <td>{el.population}</td>
				<td>
                  <button
                    onClick={() => {
                      handleEdit(el.id);
                    }}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
		</table>
	</div>
}
