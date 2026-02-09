import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar/Navbar"
import Stopwatch from "./components/stopwatch/Stopwatch"
import SearchComp from "./components/searchSort/SearchComp"
import DropdownInfiniteScroll from "./components/i-scroll/InfiniteScroll"
import OTPComp from "./components/otp/OTPComp"
import AddProductToCart from "./components/product-cart/AddProductToCart"
import Posts from "./react-query/Posts"


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
        <Route path="/otp" element={<OTPComp />} />
        <Route path="/product-cart" element={<AddProductToCart />} />
        <Route path="/tankstack-query" element={<Posts />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 Page Not Found</h2>} />
      </Routes>
    </div>
  )
}


export default App
