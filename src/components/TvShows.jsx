import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TvShows.css";
import NavBar from "./NavBar";
const TvShows = () => {
    const[bestSeries,setBestSeries] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const seriesRequest = fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",{
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNThiNDdkNTU1YjU5MDJiODEzM2Y2MTgxZjEwYTMxMyIsInN1YiI6IjY1ODlkNjRjNGRhM2Q0NjRjYTQxZGE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTRcmNcnrUGB6FAqZnt64Pba3gR1nu0kwUAgsZT-Xo4'
                      }
                });
                const seriesResponse = await seriesRequest;
                if(!seriesResponse.ok){
                    throw new Error("Movies not Found")
                }
                const seriesData = await seriesResponse.json();
                setBestSeries(seriesData.results);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    return(
        <div className="tv-shows-page">
        <NavBar/>
        <h1 id = "h1-tv-series"> Top Rated Tv Series </h1>
        <ul className="tv-list">
        {!bestSeries.length ? (<div> Loading...</div>) : (
            bestSeries.filter(serie => serie.poster_path)
            .map((serie)=> {
                return(
                    <div key = {serie.id} className="card">
                    <img src = {`https://image.tmdb.org/t/p/w500${serie.poster_path}`} className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title"> {serie.name}</h5>
                    <p className="card-text"> {serie.overview}</p>
                    <hr/>
                    <p id = "vote-average"> TMDB vote average: {serie.vote_average}</p>
                    </div>
                    </div>
                )
            })
        )}
        </ul>
        </div>
    )
}

export default TvShows;