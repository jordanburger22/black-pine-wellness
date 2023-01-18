import { useState } from "react";
import { MassageEditFields } from "./editFields";



function MassageData(props){

    const {title, description, price, _id} = props
    const [massageEditMode, setMassageEditMode] = useState(false)

    function changeEditMode(){
        setMassageEditMode(prevMode => !prevMode)
    }

    return(
        <div>
            {!massageEditMode &&
            <>
                <h3>Massage Title: {title}</h3>
                <h3>Massage Price : {price}</h3>
                <h3>Massage Description: {description}</h3>
                <button onClick={changeEditMode}>Change Info</button>
                <button onClick={() => props.delete(_id)}>Delete Massage Style</button>
            </>}
            {massageEditMode &&
            <>
                 <MassageEditFields 
                    title = {title}
                    description = {description}
                    price= {price}
                    toggle= {changeEditMode}
                 />  
            </>}
        </div>
    )
}

export default MassageData

