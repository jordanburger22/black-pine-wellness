import { Link } from "react-router-dom"
import logo from "../images/black-pine-logo.jpg"

function Header(props){

    const {logout, token} = props

    return(
        <nav className="nav-bar">
            <img className="nav-logo" src= {logo}/>
            <Link to = "/" className="nav-link">Home</Link>
            <Link to = "/services" className="nav-link">Services</Link>
            <Link to = "/contact" className="nav-link">Contact</Link>
            {token && <button className="logout-btn" onClick={logout}>Logout</button>}
        </nav>
        
    )
}


export default Header