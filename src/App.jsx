import HomePage from "./components/HomePage"
import { Routes, Route } from "react-router-dom"
import GenrePage from "./components/GenrePage"
import HorrorPage from "./components/HorrorPage"
import TvShows from "./components/TvShows"
import CarouselTest from "./components/CarouselTest";
function App() {


  return (
    
      <div className="app">
      
      <Routes>
      <Route path = "/test-carousel" element = {<CarouselTest/>}/>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/movie-genres" element = {<GenrePage/>}/>
      <Route path = "/movie-genres/:genreId" element = {<HorrorPage/>} />
      <Route path = "/tv-shows" element = {<TvShows/>}/>
      </Routes>
       
      </div>
      
    
  )
}

export default App
