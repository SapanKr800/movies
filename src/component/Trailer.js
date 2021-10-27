import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import ReactPlayer from "react-player";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import axios from "axios";
function Trailer() {
  const { id } = useParams();
  const [cast, setCast] = useState({});
 

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9930a25735d920ecddd6e50f8c28f2eb&language=en-US`
      );
      setCast(response.data);
      //  setGenres(response.data.genres);
    }

    fetchMyAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(cast.results);

  return (
    <>
 


<Popup trigger={
                <div className="playBtn">
                  <MdOutlinePlayCircleFilled className="movieBtn" />
                </div>} modal>
                <div> 
                {cast.results &&
        cast.results
          .slice(0, 1)
          .map((trailer, i) => (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}`}
              playing={true}
            />
          ))}
    
         </div>
                </Popup>
    </>
  );
}
export default Trailer;





