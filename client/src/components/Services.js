import dataContext from "./dataContext"
import { Link } from "react-router-dom"
import { useContext } from "react"

function Services(){

    const data = useContext(dataContext)
    const servicesInfo = data.services
    
    console.log(servicesInfo)
    const serviceList = servicesInfo.map(service => (
        <div className="service">
            {/* <img className="service-banner" src={service.serviceBannerImg}/> */}
            <div>
                <img className="service-photo" src={service.serviceImg}/>
            </div>

            <div className="service-info">
                <h2>{service.title}</h2>
                <h3>{service.subTitle}</h3>
                {service.description && 
                <p>{service.description}</p>}
                {service.price && 
                <p>{service.price}</p>}
                {service.title === 'Massage' &&
                <Link className="service-massage-link" to = "/massagestyles">Go to Massage Styles</Link>
                }
            </div>
        </div>
    ))

    return(
        <div className="services-container">
            <h1 className="service-header">Services</h1>
            {serviceList}
        </div>
    )
}

export default Services