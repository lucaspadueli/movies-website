import "./HomePage.css";
import NavBar from "./NavBar";
import CarouselTest from "./CarouselHome";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <NavBar showGenres={true} />
      <h1 id="h1-home"> Everything about movies</h1>
      <p id="now-playing-text"> Now Playing:</p>
      <CarouselTest />
    </div>
  );
};

export default HomePage;
