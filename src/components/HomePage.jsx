import NavBar from "./NavBar";
import NowPlaying from "./NowPlaying";
import "./HomePage.css";
const HomePage = () => {
    return(
        <div>   
            <NavBar/>
            <h1> Find out everything about movies!</h1>
            <hr/>
            <NowPlaying/>
        </div>
    )
}

export default HomePage;