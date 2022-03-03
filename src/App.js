
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
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
    getData();
  }, []);

  const Launch_year = async (year) => {
    try {
      const response = await axios.get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`
      );
      const myData = response.data;
      console.log(response.data);
      setSpaceData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  const Launch_success_filter = async () => {
    try {
      const response = await axios.get(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
      );
      const myData = response.data;
      console.log(response.data);
      setSpaceData(myData);
    } catch (error) {
      console.log(error);
    }
  };
  const Launch_success_filter_false = async () => {
    try {
      const response = await axios.get(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false"
      );
      const myData = response.data;
      console.log(response.data);
      setSpaceData(myData);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(Launch_success_filter(true));

  // const Launch_and_Land_filter= async()=>{
  //   const [spaceData, setSpaceData] = useState([]);

  //       try {
  //         const response = await axios.get(
  //           "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true ");
  //         const myData = response.data;
  //         console.log(response.data);
  //         setSpaceData(myData);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  return (
    <div className="container">
      {/* <div className="row"> */}
      <div className="col-md-3 mt-5 card" style={{ background: "#D3D3D3" }}>
        <p>
          <b>SpaceX Launch Program</b>
        </p>
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <p>
            <b>Filters</b>
          </p>
          <p>
            <center>Launch Year</center>
          </p>
          <hr />

          <button
            className="btn btn-secondary"
            style={{
              alignContent: "center",
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2006)}
          >
            2006
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2007)}
          >
            2007
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2008)}
          >
            2008
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2009)}
          >
            2009
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2010)}
          >
            2010
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2011)}
          >
            2011
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2012)}
          >
            2012
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2013)}
          >
            2013
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2014)}
          >
            2014
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2015)}
          >
            2015
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2016)}
          >
            2016
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2017)}
          >
            2017
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_year(2018)}
          >
            2018
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2019)}
          >
            2019
          </button>
          <br />
          <br />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_year(2020)}
          >
            2020
          </button>

          <br />
          <br />
          <p>
            <center>Successfull Launch</center>
          </p>
          <hr />
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            onClick={() => Launch_success_filter(true)}
          >
            True
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => Launch_success_filter_false(false)}
          >
            False
          </button>
          <br />
          <br />
          <p>
            <center>Successfull Landing</center>
          </p>

          <hr />

          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
              marginRight: "56px",
            }}
            // onClick={() => Launch_and_Land_filter(true) }
          >
            True
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 25px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            // onClick={() => Launch_and_Land_filter(!true) }
          >
            False
          </button>

          <br />
        </div>
      </div>
      <div className="row">
        {spaceData.map((space, index) => {
          //console.log(space.links.mission_patch_small);
          return (
            <div className="col-md-3 mt-5 card">
              {/* // <div className="row row-cols-auto" >  */}
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
                    {space.launch_success.toString()}
                  </div>
                  <br />
                  <b>Successful Landing:</b>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
