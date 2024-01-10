import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = ({hiddeItem}) => {
    
    return(
      <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark" >
      
      <a className ="a-nav-bar" href = "/"> Home </a>
        {!hiddeItem && <button className="btn btn-sm btn-outline-secondary" type="button"> <Link id = "genre-btn" to = "/movie-genres">Genres </Link></button>}
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-blue border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-dark">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/tv-shows">Tv Shows</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/movie-genres">Movie Genres</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      
    </nav>
    )
}

export default NavBar;