import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ hiddeItem }) => {
  return (
    <nav
      className="navbar bg-transparent border-bottom border-body navbar-expand-lg"
      data-bs-theme="dark"
    >
      <Link className="a-nav-bar" to="/">
        {" "}
        Home{" "}
      </Link>
      {!hiddeItem && (
        <button className="btn btn-sm btn-outline-secondary" type="button">
          {" "}
          <Link id="genre-btn" to="/movie-genres">
            Genres{" "}
          </Link>
        </button>
      )}
      <button
        className="navbar-toggler shadow-none border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="sidebar offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header  border-bottom">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-dark shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-transparent">
          <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/tv-shows">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/movie-genres">
                Movie Genres
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
NavBar.propTypes = {
  hiddeItem: PropTypes.bool.isRequired,
};
export default NavBar;
