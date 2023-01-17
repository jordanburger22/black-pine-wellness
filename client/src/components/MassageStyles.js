import { useContext } from "react"
import { Link } from "react-router-dom"
import dataContext from "./dataContext"

function MassageStyles() {

    const data = useContext(dataContext)
    const massageStyles = data.massageStyles

    const stylesList = massageStyles.map(massage => (
        <div className="massage-style">
            <h1>{massage.title}</h1>
            <h4>{massage.description}</h4>
            <h4>{massage.price}</h4>
        </div>
    ))

    console.log(massageStyles)

    return(
        <div className="massageStyles-container">
            <div className="link-to-services-container">
                <Link className="link-to-services" to="/services">Back to Services</Link>
            </div>
            {stylesList}
            <div className="link-to-services-container">
                <Link className="link-to-services" to="/services">Back to Services</Link>
            </div>
        </div>
    )
}

export default MassageStyles