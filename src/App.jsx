import HomePage from "./components/HomePage"
import { Routes, Route } from "react-router-dom"
import GenrePage from "./components/GenrePage"
import HorrorPage from "./components/HorrorPage"
import NavBar from "./components/NavBar"
import TvShows from "./components/TvShows"
function App() {


  return (
    
      <div className="app">
      <NavBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/movie-genres" element = {<GenrePage/>}/>
      <Route path = "/movie-genres/:genreId" element = {<HorrorPage/>} />
      <Route path = "/tv-shows" element = {<TvShows/>}/>
      </Routes>
       
      </div>
      
    
  )
}

export default App
