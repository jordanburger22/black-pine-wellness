import dataContext from "./dataContext"
import { useContext, useState } from "react"
import ServiceData from "./ServiceData"
import BusinessData from "./BusinessData"

function Admin(){

    const data = useContext(dataContext)
    const businessInfo = data.businessInfo
    const massageStyles = data.massageStyles
    const services = data.services

    
    
    const [massageEditMode, setMassageEditMode] = useState(false)



    

    function changeMassageMode(){
        setMassageEditMode(prevState => !prevState)
    }





    const massageData = massageStyles.map(massage => (
        <div key={massage._id} className="admin-massage-styles">
            {!massageEditMode &&
            <>
                <h3>Massage Title: {massage.title}</h3>
                <h3>Massage Price : {massage.price}</h3>
                <h3>Massage Description: {massage.description}</h3>
                <button onClick={changeMassageMode}>Change Info</button>
            </>}
            {massageEditMode &&
            <>
                 <input />   
                 <input />   
                 <input />
                 <button onClick={changeMassageMode}>Save</button>   
            </>}
        </div>
    ))

    const serviceMap = services.map(service => {
        return <ServiceData 
            {...service}
            key= {service._id}
        />
    })

    const businessMap = businessInfo.map(info => {
        return <BusinessData 
            key = {info._id}
            {...info}
        />
    })

    


    return (
        <div className="admin-container">
            <div className="admin-info">
                <h1>Basic Info</h1>
                {businessMap}
            </div>
            <div className="admin-info">
                <h1>Service Info</h1>
                {serviceMap}
            </div>
            <div className="admin-info">
                <h1>Massage Styles</h1>
                {massageData}
            </div>
        </div>
    )
}

export default Admin