import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css";
import Photo from './components/Photo.js'

function App() {

const [photoOfTheDay, setPhotoOfTheDay] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=beL8Pgyd1n0GQXDie0CCh50HamVIgQBXarVjPPHx')
    .then(res => {
      console.log(res.data)
      setPhotoOfTheDay(res.data)
    })
    .catch(err => {
      console.log('Error: ' + err)
    })
  },[])

  return (
    <div className="App">
      <div className="photoHolder">
        <Photo photoOfTheDay={photoOfTheDay}/>
      </div>
    </div>
  );
}

export default App;
