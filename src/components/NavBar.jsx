import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
      <nav className="navbar bg-transparent border-bottom navbar-expand-lg text-white" >
      <div className="container">
      <a id ="a-nav-bar" href = "/"> Movies WebSite</a>
        <a className="navbar-brand fs-4" href="/"> </a>
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
      </div>
    </nav>
    )
}

export default NavBar;