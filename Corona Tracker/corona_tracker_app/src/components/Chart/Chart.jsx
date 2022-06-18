import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);


function Chart() {
    const [cases,setCases]=useState({})

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/all").then((res) => {
            console.log('res:', res)
            setCases(res.data)
        })
    }, [])
    
     const piedata = {
    labels: ["deaths", "recovered", "cases"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          cases.todayCases,
          cases.todayRecovered,
          cases.todayDeaths,
        ],
        backgroundColor: ["red", "green", "yellow"],
        borderColor: ["red", "green", "yellow"],
        borderWidth: 1,
      },
    ],
    };
    
    const data = {
    labels: ["Recovered","Active","Deaths"],
    datasets: [
      {
        label: ["Recovered","Active","Deaths"],
        data: [
          cases.todayCases,
          cases.todayRecovered,
          cases.todayDeaths,
        ],
        backgroundColor: "yellow",
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };

    
  return (
    <div className='container'>
      <Pie
                data={piedata}
                width={100}
                height={100}
                style={{ width: "100px", height: "100px" }}
          />
          <Line data={data}>Hello</Line>
    </div>
  )
}

export default Chart
