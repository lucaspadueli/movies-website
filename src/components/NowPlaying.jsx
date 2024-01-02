import { useState, useEffect } from "react";
import "./NowPlaying.css";
const NowPlaying = () => {
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
    <div className="now-playing">
        <h3>
            Now playing:
        </h3>
        <div>
            <ul className="now-playing-list">
            {!playingNow.length ? (<div>
                Loading...
            </div>): (
                playingNow.map((movie)=> {
                    return(
                        <div key = {movie.id} className="movies-container">
                        <img src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                        <p>{movie.original_title} </p>
                        <p>{movie.overview} </p>
                        

                        </div>
                    )
                })
            )}
            </ul>
        </div>
    </div>
)

}


export default NowPlaying;