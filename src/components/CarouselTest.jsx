import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
const CarouselTest = () => {
    const [playingNow,setPlayingNow] = useState([]);
useEffect(()=>{
    const fetchData = async () =>{
        try {
            const nowPlayingRequest = fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4',
                  }
            });
            const nowPlayingResponse = await nowPlayingRequest;
            if(!nowPlayingResponse.ok){
                throw new Error("Movies not found!")
            }
            const nowPlayingData = await nowPlayingResponse.json();
            setPlayingNow(nowPlayingData.results);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
},[])
    return(
        <div className="container">
        
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
            {!playingNow.length ? (<div> Loading</div>) : (
                playingNow.map((movie,index)=>{
                    return(
                        <div key = {movie.id} className= {`carousel-item ${index === 0 ? "active" : "" }`}>
                        <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="d-block w-100" alt="movie-carousel"/>
                        <h2 id = "title"> {movie.title }</h2>
                        <p id = "movie-overview">{movie.overview}</p>
                         </div>
                         
                    )
                })
            )}


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
            </button>

            </div>
            </div>
    )
}

export default CarouselTest;