import "./GenrePage.css";
import { useState,useEffect } from "react";

const GenrePage = () => {
  const [genres,setGenres] = useState([]);
useEffect(()=>{
  const fetchData = async () => {
    try {
      const genresRequest = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",{
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4'
    }
  });
  const genreResponse = await genresRequest;
  if(!genreResponse.ok){
    throw new Error("Movie not Found")
  }
  const genreData = await genreResponse.json();
  setGenres(genreData.genres);
    } catch (error) {
      console.log(error);
    }
  }
 fetchData();
},[])

  return (
    <div className="genre-page">
      <h4>Choose the genre and we`ll show you the best movies!</h4>
      <ul> 
      {!genres.length ? (<div>Loading... </div>) : (
        genres.filter(genre=> genre.id == 28 || genre.id == 35 || genre.id == 27 || genre.id == 878 || genre.id == 10749 )
        .map((genre)=> {
          return(
            <li key = {genre.id}>
            <a href={`/movie-genres/${genre.id}`} >{genre.name}</a>
             </li> 
          )
        })
      )}
    </ul>
    </div>
  );
};

export default GenrePage;
