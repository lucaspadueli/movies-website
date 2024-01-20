import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul className="tmdb-site">
          <li>
            {" "}
            <Link to="https://www.themoviedb.org/?language=pt-BR">
              {" "}
              Oficial TMDB Web Site
            </Link>
          </li>
          <li>
            {" "}
            <Link to="https://developer.themoviedb.org/docs/getting-started">
              {" "}
              API TMDB{" "}
            </Link>
          </li>
        </ul>
        <ul className="developer">
          <li> Developed by Lucas Capella:</li>
          <li>
            {" "}
            <Link to="https://www.linkedin.com/in/lucas-padueli-dev/">
              Linkedin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/lucaspadueli">Github </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="https://www.behance.net/lucascapella2">Portfolio </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-bottom">
        <p id="footer-lucas"> © 2024 Lucas Capella - Desenvolvimento Web </p>
      </div>
    </div>
  );
};

export default Footer;
