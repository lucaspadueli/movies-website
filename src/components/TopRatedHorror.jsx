import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EachGenrePage.css";
import PropTypes from 'prop-types';
const TopRatedHorror = ({genreId}) => {
    
const [topHorror,setTopHorror] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
               const horrorRatedRequest = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4&with_genres=${genreId}&sort_by=vote_average.desc`,{
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4'
                  }
               });
               const horrorRatedResponse = await horrorRatedRequest;
               if(!horrorRatedResponse.ok){
                throw new Error("movies not found!");
               }
               const topRatedHorrorData = await horrorRatedResponse.json();
               setTopHorror(topRatedHorrorData.results);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[genreId]);
    return(
        <div className="top-rated-horror-page">
            <h1 className='h1-genre-container'> Top Rated </h1>
            <ul className="horror-top-list">
                {!topHorror.length ? (<div>
                    Loading...
                </div>):(
                    topHorror.filter(movie=>movie.poster_path)
                    .map((movie)=>{
                        return(
                            <div key = {movie.id} className="card">
                            <img src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <hr/>
                            <p className="card-text"> TMDB vote average: {movie.vote_average}</p>
                            </div>
                            
                            </div>
                            

                            
                            


                        )
                    } )
                )}
            </ul>
        </div>
    );
    
}
TopRatedHorror.propTypes = {
    genreId: PropTypes.number.isRequired
};
export default TopRatedHorror;



