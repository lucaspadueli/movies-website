import PropTypes from 'prop-types';
import "./EachGenrePage.css";
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const MostPopularHorror = ({genreId}) => {
const [mostPopularMovies,setMostPopularMovies] = useState([]);

useEffect(()=>{
    const fetchData = async () => {
        try {
            const mostPopularRequest = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4&with_genres=${genreId}&sort_by=popularity.desc`,{
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4'
                  }
            });
            const mostPopularResponse = await mostPopularRequest;
            if(!mostPopularResponse.ok){
                throw new Error("Movies not found")
            }
            const mostPopularData = await mostPopularResponse.json();
            setMostPopularMovies(mostPopularData.results);
        } catch (error) {
            console.log(error)
        }
        
    }
    fetchData();
},[genreId])

    return (
        <div className='most-popular-movies-genre'>
        <h1 className='h1-genre-container'> Most Popular </h1>
        <ul className='most-popular-list'> 
        {!mostPopularMovies.length ? (<div> Loading</div>) : (
            mostPopularMovies.filter(movie => movie.poster_path)
            .map((movie)=>{
                return(
                    <div key = {movie.id} className="card">
                            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <hr/>
                            <p className="vote-average card-text"> TMDB vote average:{movie.vote_average}</p>
                            </div>
                            
                            </div>
                )
            })
        )}

        </ul>
        </div>
    )
}

MostPopularHorror.propTypes = {
    genreId: PropTypes.number.isRequired
}

export default MostPopularHorror;