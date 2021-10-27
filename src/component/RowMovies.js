import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const img_base_url = "https://image.tmdb.org/t/p/original/";
function RowMovies({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      //   console.log(requests.data.results);
      setMovies(requests.data.results);

      return requests;
    }
    fetchData();
  }, [fetchUrl]);
 // console.log(movies);
  return (
    <>

        <div className="movieContainer">

        <h2>{title}</h2>

<div className="movie_posters ">
  {movies.map((movies) => (
     <Link to={`/movie/${movies.id}`}>
    <img src={`${img_base_url}${ movies.poster_path}`}
     key={movies.id}
      alt={movies.name}
       className="movie_poster_large" />
       </Link>
   
  ))}
</div>

        </div>

    
    </>
  );
}

export default RowMovies;
