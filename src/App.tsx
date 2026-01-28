import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Stopwatch from "./components/stopwatch/Stopwatch"
import SearchComp from "./components/searchSort/SearchComp"
import DropdownInfiniteScroll from "./components/i-scroll/InfiniteScroll"


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route  path="/" element={<Stopwatch />} /> 
        <Route path="/search-sort" element={<SearchComp />} />
        <Route path="/i-scroll" element={<DropdownInfiniteScroll />} />
      </Routes>
    </div>
  )
}


export default App
