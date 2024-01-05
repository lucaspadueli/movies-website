import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopRatedHorror from "./TopRatedHorror";
import MostPopularHorror from "./MostPopularHorror";
import "./EachGenrePage.css";

const HorrorPage = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const {genreId} = useParams();
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Verifica se o clique foi fora dos botões
            if (!event.target.closest('.each-genre-list')) {
                setSelectedButton(null);
            }
        };

        // Adiciona o ouvinte de eventos
        document.addEventListener('click', handleClickOutside);

        // Limpeza no efeito de desmontagem
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="each-genre-page">
            
            <ul className="each-genre-list">
                <li><button href="#" onClick={() => setSelectedButton("top-rated")}>Top Rated</button></li>
                <li><button href="#" onClick={() => setSelectedButton("most-popular")}>Most Popular</button></li>
            </ul>
            {selectedButton === "top-rated" && <TopRatedHorror genreId={genreId} />}
            {selectedButton === "most-popular" && <MostPopularHorror />}
        </div>
    );
};

export default HorrorPage;