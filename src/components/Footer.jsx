import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul className="tmdb-site">
          <li>
            {" "}
            <a href="https://www.themoviedb.org/?language=pt-BR">
              {" "}
              Oficial TMDB Web Site
            </a>
          </li>
          <li>
            {" "}
            <a href="https://developer.themoviedb.org/docs/getting-started">
              {" "}
              API TMDB{" "}
            </a>
          </li>
        </ul>
        <ul className="developer">
          <li> Developed by Lucas Capella:</li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/lucas-padueli-dev/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/lucaspadueli">Github </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.behance.net/lucascapella2">Portfolio </a>
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
