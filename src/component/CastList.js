import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";

function CastList() {
  const { id } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9930a25735d920ecddd6e50f8c28f2eb&language=en-US`
      );
      setCast(response.data);
      //  setGenres(response.data.genres);
    }

    fetchMyAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(cast);
  return (
    <>
      <div className="movieContainer castContainer">
        <h2> Casts Details</h2>
        <div className="movie_posters castDetails">
          {cast.cast &&
            cast.cast.slice(0, 15).map((c, i) => (
              <div className="Singlecast">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${c.profile_path} `}
                  alt="img"
                  className="castImg"
                />
                <p key={c.id}> {c.name} </p>
              </div>
            
            ))}
        </div>

      
      </div>
    </>
  );
}

export default CastList;
