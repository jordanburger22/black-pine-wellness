import { useContext } from "react"
import dataContext from "./dataContext"
import { Link, useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    const data = useContext(dataContext)
    const businessInfo = data.businessInfo

    const homeInfo = businessInfo.map(info => (
        <div className="home-header">
            <h1>{info.businessName}</h1>
            <h3>{info.subHeader}</h3>
        </div>
    ))

    const serviceStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1609929986629-61335f8cae8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
    }

    const contactStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
        backgroundPosition: 'center'
    }

    return(
        <div className="home-container">

            {homeInfo}

            <div className="home-link-container">
                <div style={serviceStyle} className="service-link" onClick={() => navigate('/services')}>
                    <h1>Services</h1>
                </div>

                <div style={contactStyle} className="service-link" onClick={() => navigate('/contact')}>
                    <h1>Contact</h1>
                </div>
            </div>

        </div>
    )
}

export default Home