import { useState } from "react"

function AddNewService(props){
    const [newServiceInputs, setNewServiceInputs] = useState({
        title: '',
        subTitle: '',
        description: '',
        price: '',
        serviceBanner: '',
        serviceImg: ''
    })

    console.log(newServiceInputs)

    function handleChange(e){
        const {name, value} = e.target
        setNewServiceInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function cancelButton(){
        setNewServiceInputs({
            title: '',
            subTitle: '',
            description: '',
            price: '',
            serviceBanner: '',
            serviceImg: ''
        })
        props.toggle()
    }

    function handleServiceSubmit(e){
        e.preventDefault()
        props.addService(newServiceInputs)
        props.toggle()
    }

    return(
        <form onSubmit={handleServiceSubmit}>
            <input
                value={newServiceInputs.title}
                name="title"
                id="title"
                onChange={handleChange}
            />

            <input 
                value={newServiceInputs.subTitle}
                name="subTitle"
                id="subTitle"
                onChange={handleChange}
            />

            <input 
                value={newServiceInputs.description}
                name="description"
                id="description"
                onChange={handleChange}
            />

            <input 
                value={newServiceInputs.price}
                name="price"
                id="price"
                onChange={handleChange}
            />

            <input 
                value={newServiceInputs.serviceBanner}
                name="serviceBanner"
                id="serviceBanner"
                onChange={handleChange}
            />

            <input 
                value={newServiceInputs.serviceImg}
                name="serviceImg"
                id="serviceImg"
                onChange={handleChange}
            />

            <button>Add New Service</button>
            <button onClick={cancelButton}>Cancel</button>
        </form>
    )
}

export default AddNewService