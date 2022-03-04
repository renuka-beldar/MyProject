import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const [selectedYear, setSelectedYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState(null);
  //const [color,setColor]=useState("blue")

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.spaceXdata.com/v3/launches?limit=100"
      );
      const myData = response.data;
      console.log(response.data);
      setSpaceData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  const setFilter = async (key, value) => {
    let currentYear = selectedYear;
    let currentLauncSuccess = launchSuccess;
    try {
      if (key === "year") {
        setSelectedYear(value);
        currentYear = value;
      }

      if (key === "launch_success") {
        setLaunchSuccess(value);
        currentLauncSuccess = value;
      }

      const response = await axios.get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${currentLauncSuccess}&launch_year=${currentYear}`
      );
      const myData = response.data;
      console.log(myData);
      setSpaceData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row " style={{ backgroundColor: "#D3D3D3" }}>
        <p >
          <h3><b>SpaceX Launch Program</b></h3>
        </p>
        <div className="col-md-3 card" style={{ border: "10px solid  #D3D3D3" }}>

          <div className="card-body" style={{ backgroundColor: "white" }}>
            <p>
              <b>Filters</b>
            </p>
            <p>
              <center>Launch Year</center>
            </p>
            <hr />
            <div className="row m-1">
              {[...Array(15).keys()]
                .map((i) => i + 2006)
                .map((year) => {
                  return (
                    <span className="col-6">
                      <button
                        className="btn btn-success m-1 btn-lg "
                        onClick={() => setFilter("year", year)}
                      
                      >
                        {year}
                      </button>
                    </span>
                  );
                })}
            </div>

            <br />
            <p>
              <center>Successfull Launch</center>
            </p>
            <hr />
            <span className="col-6">
              <button
                className="btn btn-success m-3 btn-lg "

                onClick={() => setFilter("launch_success", true)}
              >
                True
              </button>
              <button
                className="btn btn-success m-2 btn-lg "

                onClick={() => setFilter("launch_success", false)}
              >
                False
              </button></span>

            <br />

            <br />
          </div>
        </div>
        <div className="col-md-9">
          <div className="row ">
            {spaceData.map((space, index) => {
              //console.log(space.links.mission_patch_small);
              return (
                <div className="col-md-3 card " style={{ border: "10px solid  #D3D3D3" }}>

                  <div class="card-body" style={{ background: "white" }}>
                    <div key={index}>
                      <img
                        style={{ background: "#D3D3D3" }}
                        className="mt-3 card-img-top "
                        src={space.links.mission_patch_small}
                        alt="images.."
                        // height="200px"
                        width="50px"
                      />

                      <br />
                      <div style={{ color: "#4863A0" }}>
                        <b>{space.mission_name}</b>
                      </div>
                      <br />
                      <b>Launch Year:</b>
                      <div>{space.launch_year}</div>
                      <br />
                      <b>Mission_ids:</b>
                      <div>{space.mission_id}</div>
                      <br />
                      <div>
                        <b>Successful Launch:</b>
                        {space.launch_success?.toString()}
                      </div>

                      <br />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
