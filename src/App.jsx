import HomePage from "./components/HomePage"
import { Routes, Route } from "react-router-dom"


function App() {


  return (
    
      <div className="app">
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      </Routes>
       
      </div>
      
    
  )
}

export default App
