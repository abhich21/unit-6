import React, { useState, useEffect } from "react";
import axios from "axios";
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

import "../Styles/home.css";

import { Navbar } from "./navbar";

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

import {
  searchFailure,
  searchLoading,
  searchSuccess,
} from "../Redux/covidTrackerRedux/covidTrackerActions";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();

  const { countrySearch } = useSelector((state) => state.event);

  const [worldData, setworldData] = useState({});
  const [contientData, setcontientData] = useState([]);
  const [countriesData, setcountriesData] = useState([]);

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v2/all?today").then((res) => {
      setworldData(() => res.data);
    });
    axios
      .get("https://corona.lmao.ninja/v2/continents?today=true&sort")
      .then((res) => {
        setcontientData(() => res.data);
      });
    axios
      .get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
      .then((res) => {
        setcountriesData(() => res.data);
      });
  }, []);

  const [searched, setsearched] = useState(countrySearch);

  useEffect(() => {
    setsearched(() => countrySearch);
  }, [countrySearch]);

  const [searchedcountryData, setsearchedcountryData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://corona.lmao.ninja/v2/countries/${searched}?yesterday=true&strict=true&query`,
      )
      .then((res) => {
        if (res.data.message) {
          dispatch(searchSuccess("india"));
        }

        setsearchedcountryData(() => res.data);
      })
      .catch((error) => {
        dispatch(searchSuccess("india"));
      });
  }, [searched]);

  const piedata = {
    labels: ["deaths", "recovered", "cases"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          searchedcountryData.deathsPerOneMillion,
          searchedcountryData.recoveredPerOneMillion,
          searchedcountryData.casesPerOneMillion,
        ],
        backgroundColor: ["red", "green", "yellow"],
        borderColor: ["red", "green", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  const [startDate, setstartDate] = useState("2022-01-01T00:00:00Z");
  const [endDate, setendDate] = useState("2022-06-17T00:00:00Z");

  const handleChangeDate = (prop, value) => {
    if (prop == "start") {
      setstartDate(() => value + "T00:00:00Z");
    } else {
      setendDate(() => value + "T00:00:00Z");
    }
  };

  const [chartcases, setchartcases] = useState([]);
  const [chartdate, setchartdate] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.covid19api.com/country/${searched}/status/confirmed?from=${startDate}&to=${endDate}`,
      )
      .then((res) => {
        if (res.data.message) {
          alert("ERROR! search a country");
          dispatch(searchSuccess("india"));
        }

        let cases = [];
        let date = [];

        res.data.map(({ Cases, Date }, index) => {
          if (index % 2 == 0) {
            cases.push(Cases);
            date.push(Date.split("T")[0]);
          }
        });

        setchartcases(() => cases);
        setchartdate(() => date);
      })
      .catch((error) => {
        alert("ERROR! search a country");
        dispatch(searchSuccess("india"));
      });
  }, [searched, startDate, endDate]);

  const data = {
    labels: chartdate,
    datasets: [
      {
        label: "cases",
        data: chartcases,
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
    <div>
      <Navbar />
      <div id="display-main-div">
        <div id="searched-country-data-div">
          <div id="country-flag-name-detail-div">
            <div style={{ justifyContent:"center"}}>
              <h1 key={2}>{searchedcountryData.country}</h1>
            </div>
          </div>
          <div id="country-total-today-cases-div">
            <div>
              <h2>Country today's cases</h2>
              <div>
                <div key={searchedcountryData.todayCases}>
                  <h2>Active</h2>
                  <p>{searchedcountryData.todayCases}</p>
                </div>
                <div className="line-between-div"></div>
                <div key={searchedcountryData.todayDeaths}>
                  <h2>Deaths</h2>
                  <p>{searchedcountryData.todayDeaths}</p>
                </div>
                <div className="line-between-div"></div>
                <div key={searchedcountryData.todayRecovered}>
                  <h2>Recovered</h2>
                  <p>{searchedcountryData.todayRecovered}</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Country Total cases</h2>
              <div>
                <div key={searchedcountryData.cases}>
                  <h2>Active</h2>
                  <p>{searchedcountryData.cases}</p>
                </div>
                <div className="line-between-div"></div>
                <div key={searchedcountryData.deaths}>
                  <h2>Deaths</h2>
                  <p>{searchedcountryData.deaths}</p>
                </div>
                <div className="line-between-div"></div>
                <div key={searchedcountryData.recovered}>
                  <h2>Recovered</h2>
                  <p>{searchedcountryData.recovered}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="country-active-critical-div">
            <div key={searchedcountryData.active}>
              <h2>Active Case</h2>
              <p>{searchedcountryData.active}</p>
            </div>
            <div className="line-between-div"></div>
            <div key={searchedcountryData.critical}>
              <h2>Critical Case</h2>
              <p>{searchedcountryData.critical}</p>
            </div>
          </div>
          <div id="pie-chart-status">
            <h2>Per Million Report</h2>
            <div className="chart-pie-div">
              <Pie
                data={piedata}
                width={100}
                height={100}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <div id="graph-representation">
            <h2>
              Linear Graph
            </h2>
            <div id="select-date-div">
              <input
                type="date"
                onChange={(event) =>
                  handleChangeDate("start", event.target.value)
                }
                className="select-date-input"
              />
              <input
                type="date"
                onChange={(event) =>
                  handleChangeDate("end", event.target.value)
                }
                className="select-date-input"
              />
            </div>
            <div className="chart-pie-div">
              <Line data={data}>Hello</Line>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
