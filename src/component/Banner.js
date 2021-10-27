import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import request from "../request";
import "../Banner.css";
import { BiHomeHeart } from "react-icons/bi";
function Banner() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchTrending);
      //   console.log(requests.data.results);
      setMovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
     
      return requests;
    }
    fetchData();
  }, []);


  return (
    <>
      <div className="banner_container" style={{
          backgroundImage:`url(
            https://image.tmdb.org/t/p/original/${movies?.backdrop_path} ) `,
            backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
      }}>
           <Link to="/">  <BiHomeHeart className="homeBtn" /> </Link>
        <div className="banner_contents">
            <h1> {movies?.title || movies?.name} </h1>
            <div className="banner_btn">
        <button className="banner_button"> play </button>
        <button className="banner_button"> My List </button>
            </div>

            <p > {movies?.overview} </p>
        </div>
        <div className="Banner_fade"></div>
      </div>

     
    </>
  );
}

export default Banner;
