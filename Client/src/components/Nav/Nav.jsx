import SearchBar from "../SearchBar"
import {Link, useNavigate} from "react-router-dom"
import './Nav.css'
import logo from '../imagenes/logo2.png'


const Nav = function({onSearch, random}){

    return(
    
         <div className="navBar">
            <div className="logo-search-container">
            <img src={logo} alt="Logo" className="nav-logo" />
             <SearchBar onSearch={onSearch}/>
            </div>
             <div>
             <button className="random" onClick={random}>ADD RANDOM</button>
             <button className="home">
                <Link to="/home">Home</Link>
             </button>
             <button className="favorites">
               <Link to="/Favorites">Favorites</Link>
             </button>
             <button className="about">
                <Link to="/about">About</Link>
             </button>
             </div>
        </div>
   
    )
}

export default Nav;