import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopRatedHorror from "./TopRatedHorror";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MostPopularHorror from "./MostPopularHorror";
import "./EachGenrePage.css";

const HorrorPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { genreId } = useParams();
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora dos botões
      if (!event.target.closest(".each-genre-list")) {
        setSelectedButton(null);
      }
    };

    // Adiciona o ouvinte de eventos
    document.addEventListener("click", handleClickOutside);

    // Limpeza no efeito de desmontagem
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="each-genre-page">
      <NavBar />
      <button type="button" className="btn btn-primary btn-back">
        <Link id="btn-a-back" to="/movie-genres">
          Back
        </Link>
      </button>
      <ul className="each-genre-list">
        <li>
          <button
            type="button"
            className="btn btn-primary select-topic-btn"
            href="#"
            onClick={() => setSelectedButton("top-rated")}
          >
            Top Rated
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-primary"
            href="#"
            onClick={() => setSelectedButton("most-popular")}
          >
            Most Popular
          </button>
        </li>
      </ul>
      {selectedButton === "top-rated" && <TopRatedHorror genreId={genreId} />}
      {selectedButton === "most-popular" && (
        <MostPopularHorror genreId={genreId} />
      )}
    </div>
  );
};

export default HorrorPage;
