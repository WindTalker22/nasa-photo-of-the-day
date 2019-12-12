import React from "react";
import { Button } from "reactstrap";

const NavBar = props => {
  // console.log(props)
  return (
    <nav>
      <h1>NASA Photo Of The Day: {props.photoOfTheDay.title}</h1>
      <div className="controlButtonBox">
        <Button color="primary" onClick={() => props.clickHandler("Mplus")}>
          +
        </Button>
        <div className="controlButtonLabel">Month: {props.month}</div>
        <Button color="primary" onClick={() => props.clickHandler("Mminus")}>
          -
        </Button>
        <Button color="primary" onClick={() => props.clickHandler("Dplus")}>
          +
        </Button>
        <div className="controlButtonLabel">Day: {props.day}</div>
        <Button color="primary" onClick={() => props.clickHandler("Dminus")}>
          -
        </Button>
        <Button color="primary" onClick={() => props.clickHandler("Yplus")}>
          +
        </Button>
        <div className="controlButtonLabel">Year: {props.year}</div>
        <Button color="primary" onClick={() => props.clickHandler("Yminus")}>
          -
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
