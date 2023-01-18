import { useState } from "react"


function AddNewMassage(props){
    const [addNewMassageInputs, setInputs] = useState({
        title: "",
        description: "",
        price: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    function cancelButton(){
        setInputs({
            title: "",
            description: "",
            price: ""
        })
        props.toggle()
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addNewMassage(addNewMassageInputs)
        props.toggle()
    }

    return(
        <form onSubmit={handleSubmit}>

             <label htmlFor="title">Title: </label>           
            <input 
                value={addNewMassageInputs.title}
                name="title"
                id="title"
                onChange={handleChange}
            />

            <label htmlFor="description">Description: </label>
            <input 
                value={addNewMassageInputs.description}
                name="description"
                id="description"
                onChange={handleChange}
            />

            <label htmlFor="price">Price: </label>
            <input 
                value={addNewMassageInputs.price}
                name="price"
                id="price"
                onChange={handleChange}
            />

            <button>Add New Massage</button>
            <button onClick={cancelButton}>Cancel</button>
        </form>
    )
}

export default AddNewMassage