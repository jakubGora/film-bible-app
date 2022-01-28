import React, { useEffect, useState } from "react";
import "./style/Searching.css";
import logo from "../../img/logo1.png";
import fb from "../../img/fb_button.png";

function Searching() {
  const [isSearchingClicked, setIsSearchingClicke] = useState(false);

  const [searchingValue, setSearchingValue] = useState();

  useEffect(() => {
    fetch(
      "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key":
            "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="Searching">
      <div className="search-input">
        <img src={logo} alt="logo" />
        <form onBlur={() => setIsSearchingClicke(false)} onSubmit={(e) => {}}>
          <input
            value={searchingValue}
            type="text"
            name="name"
            onFocus={() => setIsSearchingClicke(true)}
            onChange={(e) => {
              setSearchingValue(e.target.value);
              console.log(searchingValue);
            }}
            placeholder="Szukaj filmów i seriali..."
          ></input>
          <div
            className={`button ${isSearchingClicked ? "" : "close"}`}
            onClick={(e) => {
              setSearchingValue(null);
              console.log(e);
            }}
          />
          <input
            className={` ${isSearchingClicked ? "close" : ""}`}
            type="submit"
            value=""
          />
        </form>
        <button className="fb">
          <img src={fb} alt="" />
        </button>
        <button>Zaloguj się</button>
      </div>
    </div>
  );
}

export default Searching;
