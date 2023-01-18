import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className="footer-container">
            <p>Black Pine Wellness | Created by Jordan Burger</p>
            <Link className='footer-link' to={'/adminlogin'}>Admin</Link>
        </div>
    )
}

export default Footer