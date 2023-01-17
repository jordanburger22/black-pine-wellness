import { useContext } from "react"
import dataContext from "./dataContext"

function Contact(){

    const data = useContext(dataContext)
    const contactInfo = data.businessInfo
    console.log(contactInfo)

    const contact = contactInfo.map(info => (
        <div className="contact-info">
            <h3>{info.businessName}</h3>
            <h3>{info.address}</h3>
            <h3>{info.phoneNumber}</h3>
            <h3>{info.name}</h3>
        </div>
    ))

    return(
        <div className="contact-container">
            <div className="contact-row1">

            </div>

            <form className="contact-form-container">
                <input className="contact-input" placeholder="Name"/>
                <input className="contact-input" placeholder="Phone Number"/>
                <input className="contact-input" placeholder="Address"/>
                <input className="contact-input" placeholder="City"/>
                <input className="contact-input" placeholder="State"/>
                <input className="contact-input" placeholder="Zip Code"/>
                <textarea className="contact-input" placeholder="Comments"/>
                <button className="contact-button">Submit</button>
            </form>

            <div className="contact-row3">
                {contact}
            </div>
        </div>
    )
}

export default Contact