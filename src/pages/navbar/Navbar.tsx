import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">React Quizz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">StopWatch</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/search-sort">Search & Sort</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/i-scroll">I-Scroll</NavLink>
      </li>
       <li className="nav-item active">
        <NavLink className="nav-link" to="/otp">OTP</NavLink>
      </li>
       <li className="nav-item active">
        <NavLink className="nav-link" to="/product-cart">Product Cart</NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="/tankstack-query">Tankstack Query</NavLink>
      </li>

    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
