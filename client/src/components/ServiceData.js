import { ServiceEditFields } from "./editFields"
import { useState } from "react"

function ServiceData(props){

    const {title, subTitle, description, price, serviceImg, serviceBannerImg} = props
    const [serviceEditMode, setServiceEditMode] = useState(false)

    function changeServiceMode(){
        setServiceEditMode(prevState => !prevState)
    }

   return( 
    <div>
        {!serviceEditMode &&
        <>
            <h3>Service Title: {title}</h3>
            <h3>Service SubTitle: {subTitle}</h3>
            {description && 
            <h3>Service Description: {description}</h3>}
            {price && 
            <h3>Service Price: {price}</h3>}
            <h3>Service Banner: {serviceBannerImg}</h3>
            <h3>Service Image: {serviceImg}</h3>
            <button onClick={changeServiceMode}>Change Info</button>
        </>}
        {serviceEditMode &&
        <>
            <ServiceEditFields 
                title= {title}
                subTitle = {subTitle}
                description = {description}
                price = {price}
                serviceImg = {serviceImg}
                serviceBannerImg = {serviceBannerImg}
                toggle = {changeServiceMode}
            />
        </>}
    </div>
)}

export default ServiceData