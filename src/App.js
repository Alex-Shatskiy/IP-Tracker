import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Map from "./Map";
import Info from "./Info";
import SearchBar from "./SearchBar";

const apiKey = "at_QW88PUvuJt2tK1N9a2tXUiInX4PBL";

function App() {
  const [myIp, setMyIp] = useState("");
  const [ipLocation, setIpLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "80vh",
    latitude: 0,
    longitude: 0,
    zoom: 8,
    position: "absolute",
    display: "botton",
  });
  const [searchIp, setSearchIp] = useState("");

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      setMyIp(res.data.ip);
    });
    axios
      .get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${myIp}`)
      .then((res) => {
        setIpLocation(res.data);
        viewport.latitude = res.data.location.lat;
        viewport.longitude = res.data.location.lng;
        setViewport({ ...viewport });
      });
  }, [""]);

  const handleChange = (evnt) => {
    setSearchIp(evnt.target.value);
  };

  const searchForIp = (ip) => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${ip}&ipAddress=${ip}`
      )
      .then((res) => {
        setIpLocation(res.data);
        viewport.latitude = res.data.location.lat;
        viewport.longitude = res.data.location.lng;
        setViewport({ ...viewport });
      });
  };

  return (
    <div className="App">
      {ipLocation.location == undefined ? (
        <></>
      ) : (
        <div className="container">
          <div className="header">
            <h2>IP Addres Tracker</h2>
            <SearchBar
              handleChange={handleChange}
              searchForIp={searchForIp}
              searchIp={searchIp}
            />
          </div>
          <div className="info">
            <Info
              ip={ipLocation.ip}
              region={ipLocation.location.region}
              timezone={ipLocation.location.timezone}
              isp={ipLocation.isp}
              country={ipLocation.location.country}
            />
          </div>
          <div className="map">
            <Map
              viewports={viewport}
              setViewports={setViewport}
              lat={ipLocation.location.lat}
              lng={ipLocation.location.lng}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
