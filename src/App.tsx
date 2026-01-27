import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Stopwatch from "./components/stopwatch/Stopwatch"
import SearchComp from "./components/searchSort/SearchComp"


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route  path="/" element={<Stopwatch />} /> 
        <Route path="/search-sort" element={<SearchComp ></SearchComp>} />
      </Routes>
    </div>
  )
}


export default App
