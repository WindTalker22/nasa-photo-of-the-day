import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo.js";
import NavBar from "./components/NavBAr.js";
import ContentBox from "./components/ContentBox";

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState("");
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(12);
  const [day, setDay] = useState(12);
  const nasaAPIKey = "beL8Pgyd1n0GQXDie0CCh50HamVIgQBXarVjPPHx";

  console.log(Date.now());

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&date=${year}-${month}-${day}`
      )
      .then(res => {
        // console.log(res.data)
        setPhotoOfTheDay(res.data);
      })
      .catch(err => {
        console.log("Error: " + err);
        setPhotoOfTheDay({
          copyright: "",
          title: "404 Photo Not Found",
          date: "",
          explanation:
            "You Have Selected An Invalid Date Please Try Another Date",
          hdurl: "https://images.unsplash.com/photo-1568920011103-b8c1c37857d8",
          media_type: "image",
          service_version: "yes",
          url: "https://images.unsplash.com/photo-1568920011103-b8c1c37857d8"
        });
      });
  }, [year, month, day]);

  const clickHandler = buttonName => {
    switch (buttonName) {
      case "Yplus":
        setYear(year + 1);
        break;
      case "Yminus":
        setYear(year - 1);
        break;
      case "Mplus":
        setMonth(month + 1);
        break;
      case "Mminus":
        setMonth(month - 1);
        break;
      case "Dplus":
        setDay(day + 1);
        break;
      case "Dminus":
        setDay(day - 1);
        break;
      default:
    }
  };

  return (
    <div className="App">
      <NavBar
        photoOfTheDay={photoOfTheDay}
        year={year}
        month={month}
        day={day}
        clickHandler={clickHandler}
      />

      <Photo photoOfTheDay={photoOfTheDay} />

      <ContentBox explanation={photoOfTheDay.explanation} />
    </div>
  );
}

export default App;
