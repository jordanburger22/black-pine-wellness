import { useState } from "react"
import { BusinessEditFields } from "./editFields"


    function BusinessData(props){

        const [businessEditMode, setBusinesssEditMode] = useState(false)

        const {name, businessName, phoneNumber, address, businessFacebookUrl, instagramUrl, personalFacebookUrl, subHeader} = props

        function changeBusinessInfo(){
            setBusinesssEditMode(prevState => !prevState)
        }
        return(
            <div>
                {!businessEditMode &&
                <>
                    <h3>Name: {name}</h3>
                    <h3>Business Name: {businessName}</h3>
                    <h3>Phone Number: {phoneNumber}</h3>
                    <h3>Address: {address}</h3>
                    <h3>Business Facebook: {businessFacebookUrl}</h3>
                    <h3>Instagram: {instagramUrl}</h3>
                    <h3>Personal Facebook: {personalFacebookUrl}</h3>
                    <h3>Sub Header: {subHeader}</h3>
                    <button onClick={changeBusinessInfo}>Change Business Info</button>
                </>}
                {businessEditMode &&
                <>
                    <BusinessEditFields 
                        name= {name}
                        businessName = {name}
                        phoneNumber = {phoneNumber}
                        address = {address}
                        businessFacebookUrl = {businessFacebookUrl}
                        instagramUrl = {instagramUrl}
                        personalFacebookUrl = {personalFacebookUrl}
                        subHeader = {subHeader}
                        toggle = {changeBusinessInfo}
                    />
                </>}
            </div>
        )
    }

    export default BusinessData