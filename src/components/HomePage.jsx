import "./HomePage.css";
import NavBar from "./NavBar";
import CarouselTest from "./CarouselTest";
const HomePage = () => {
    return(
        <div>   
            <NavBar showGenres={true}/>
            <h1 id = "h1-home"> Everything about movies</h1>
            <CarouselTest/>
            
        </div>
    )
}

export default HomePage;