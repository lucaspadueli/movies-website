import NowPlaying from "./NowPlaying";
import "./HomePage.css";
const HomePage = () => {
    return(
        <div>   
            <h1> Find out everything about movies!</h1>
            <hr/>
            <NowPlaying/>
            <p id = "search-genres"> Click <span> <a href="/movie-genres">here</a> </span> to search for genres</p>
        </div>
    )
}

export default HomePage;