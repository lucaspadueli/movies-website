import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
      <nav class="navbar bg-transparent border-bottom navbar-expand-lg text-white" >
      <div class="container">
      <a id ="a-nav-bar" href = "/"> Movies WebSite</a>
        <a class="navbar-brand fs-4" href="/"> </a>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header text-blue border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body bg-dark">
            <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/tv-shows">Tv Shows</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/movie-genres">Movie Genres</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;