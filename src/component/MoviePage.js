import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiHomeHeart } from "react-icons/bi";
import "../Banner.css";
import axios from "axios";
import CastList from "./CastList";
import Trailer from "./Trailer";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  //const [genre, setGenres] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9930a25735d920ecddd6e50f8c28f2eb`
      );
      setMovie(response.data);
      //  setGenres(response.data.genres);
    }

    fetchMyAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
     
      <div
        style={{
          backgroundImage: `url(
    https://image.tmdb.org/t/p/original/${movie?.backdrop_path} ) `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <Link to="/">  <BiHomeHeart className="homeBtn" /> </Link>
        <div className="container glassDiv">
          <div className="moviesDetailsPage">
            <div className="row">
              <div className="col-md-3">
              <Trailer/>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}
                  alt="img"
                />
              </div>

              <div className="col-md-9">
                <div className="moviesText">
                  <h3> {movie?.title || movie?.name} </h3>

                  <p className="moviesDesc">{movie?.overview} </p>
                </div>

                <div className="row sideli">
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <span>Release Date:</span> {movie?.release_date}{" "}
                      </li>
                      <li>
                        <span>Status:</span> {movie?.status}
                      </li>
                      <li>
                        <span>Genre:</span>
                        {movie.genres &&
                          movie.genres.map((g, i) => (
                            <span key={i}>{g.name} </span>
                          ))}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <span>Popularity:</span> {movie?.popularity}
                      </li>
                      <li>
                        <span>Rating:</span> {movie?.vote_average}
                      </li>
                      <li>
                        <span>Duration:</span> {movie?.runtime} min{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <CastList />

      <br/> <br/> <br/>
    </>
  );
}

export default MoviePage;
