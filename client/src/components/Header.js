import { Link } from "react-router-dom"
import logo from "../images/black-pine-logo.jpg"

function Header(){
    return(
        <nav className="nav-bar">
            <img className="nav-logo" src= {logo}/>
            <Link to = "/" className="nav-link">Home</Link>
            <Link to = "/services" className="nav-link">Services</Link>
            <Link to = "/contact" className="nav-link">Contact</Link>
        </nav>
        
    )
}


export default Header