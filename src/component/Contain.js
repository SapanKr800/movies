import React from 'react'
import RowMovies from './RowMovies';
import request from '../request';
import Banner from './Banner';

function Contain() {
  
    return (
        < >
        
        <div className="conatiner"> 
    <Banner/>

            <RowMovies title="Trending Now"
             fetchUrl={request.fetchTrending}
               />

            <RowMovies title="Up Coming" 
            fetchUrl={request.UpComing}
              />

<RowMovies title=" Top Rated" 
            fetchUrl={request.fetchTopRated}
              />

<RowMovies title=" Action Movies" 
            fetchUrl={request.fetchActionMovies}
              />

           </div>

        </> 
    )
}

export default Contain;
