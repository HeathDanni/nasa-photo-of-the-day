import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=gnW3zg7lvPtYsBGW1XMtH2ITzkqxTyUyRXIcyaWo`)
      .then((res) => {
        console.log('res: ', res);
        setNasaData(res);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  console.log('nasaData:', nasaData);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
