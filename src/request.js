const API_KEY ="9930a25735d920ecddd6e50f8c28f2eb";
const baseURL = "https://api.themoviedb.org/3";
const request = {
    fetchTrending: `${baseURL}/trending/all/day?api_key=${API_KEY}`,
    UpComing: `${baseURL}/movie/upcoming?api_key=${API_KEY}`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}`,
  //  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  //  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    

}

export default request;