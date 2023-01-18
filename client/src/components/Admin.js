import dataContext from "./dataContext"
import { useContext, useState } from "react"
import ServiceData from "./ServiceData"
import BusinessData from "./BusinessData"
import MassageData from "./MassageStyleData"
import AddNewMassage from "./AddNewMassage"
import AddNewService from "./AddNewService"


function Admin(props){
    
    const data = useContext(dataContext)
    const businessInfo = data.businessInfo
    const massageStyles = data.massageStyles
    const services = data.services

    const [newMassageToggle, setMassageToggle] = useState(false)
    const [newServiceToggle, setNewServiceToggle] = useState(false)

    function toggleMassage(){
        setMassageToggle(prevValue => !prevValue)
    }

    function toggleService(){
        setNewServiceToggle(prevValue => !prevValue)
    }

    
    const serviceMap = services.map(service => {
        return <ServiceData 
            {...service}
            key= {service._id}
            delete = {props.deleteService}
        />
    })

    const businessMap = businessInfo.map(info => {
        return <BusinessData 
            key = {info._id}
            {...info}
        />
    })

    const massageMap = massageStyles.map(massage => {
        return <MassageData 
            {...massage}
            key= {massage._id}
            delete = {props.deleteMassage}
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
                {!newServiceToggle && 
                <button onClick={toggleService}>Add New Service</button>}
                {newServiceToggle &&<>
                    <AddNewService 
                        toggle= {toggleService}
                        addService = {props.addService}
                    />
                </>}
            </div>

            <div className="admin-info">
                <>
                    <h1>Massage Styles</h1>
                    {massageMap}
                    {!newMassageToggle && 
                    <button onClick={toggleMassage}>Add New Massage</button>}
                </>
                {newMassageToggle && <>
                    {<AddNewMassage 
                        toggle = {toggleMassage}
                        addNewMassage = {props.saveMassage}
                    />}
                </>}
            </div>
        </div>
    )
}

export default Admin