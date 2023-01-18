import { useState } from "react"


function ServiceEditFields(props){

    const [serviceInputs, setServiceInputs] = useState({
        title: props.title,
        subTitle: props.subTitle,
        description: props.description,
        price: props.price,
        serviceBanner: props.serviceBannerImg,
        serviceImg: props.serviceImg
    })

    function handleChange(e){
        const {name, value} = e.target
        setServiceInputs(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.toggle()
    }

    return(
        <form className = 'edit-form' onSubmit={handleSubmit}>

            <label htmlFor="title">Title: </label>
            <input 
                value={serviceInputs.title}
                name= "title"
                onChange={handleChange}
                id= "title"
            />

            <label htmlFor="subTitle">SubTitle: </label>
            <input 
                value={serviceInputs.subTitle}
                name= "subTitle"
                onChange={handleChange}
                id="subTitle"
            />


           {props.description &&
           <>
            <label htmlFor="description">Description: </label>
            <input 
                    value={serviceInputs.description}
                    name= "description"
                    id= "description"
                    onChange={handleChange}
                    />
                </> 
            }

            {props.price &&
            <>
                <label htmlFor='price'>Price: </label>
                <input 
                    value={serviceInputs.price}
                    name= "price"
                    id= "price"
                    onChange={handleChange}
                    />
            </>
            }

            <label htmlFor='serviceBanner'>Service Banner: </label>
            <input 
                value={serviceInputs.serviceBanner}
                name= "serviceBanner"
                id= "serviceBanner"
                onChange={handleChange}
            />

            <label htmlFor='serviceImg'>Service Image: </label>
            <input 
                value={serviceInputs.serviceImg}
                name= "serviceImg"
                id= "serviceImg"
                onChange={handleChange}
            />

            <button>Save</button>

        </form>
    )
}


function MassageEditFields(props){

    const [massageStyleInputs, setMassageStyleInputs] = useState({
        title: props.title,
        description: props.description,
        price: props.price
    })

    function handleChange(e){
        const {name, value} = e.target
        setMassageStyleInputs(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.toggle()
    }

    return(
        <form className ='edit-form' onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
                value={massageStyleInputs.title}
                name='title'
                id="title"
                onChange={handleChange}
            />

            <label htmlFor="description">Description: </label>
            <input 
                value={massageStyleInputs.description}
                name='description'
                id="description"
                onChange={handleChange}
            />

            <label htmlFor="price">Price: </label>
            <input 
                value={massageStyleInputs.price}
                name='price'
                id="price"
                onChange={handleChange}
            />

            <button>Save</button>
        </form>
    )
}

function BusinessEditFields(props){

    const [businessInputs, setBusinessInputs] = useState({
        name: props.name,
        address: props.address,
        businessName: props.businessName,
        phoneNumber: props.phoneNumber,
        businessFacebookUrl: props.businessFacebookUrl,
        personalFacebookUrl: props.personalFacebookUrl,
        instagramUrl: props.instagramUrl,
        subHeader: props.subHeader
    })

    function handleChange(e){
        const {name, value} = e.target
        setBusinessInputs(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.toggle()
    }
    console.log(businessInputs)
    return(
        <form className = 'edit-form' onSubmit={handleSubmit}>
            
           <label htmlFor="name">Name: </label> 
            <input 
                value={businessInputs.name}
                name='name'
                id="name"
                onChange ={handleChange}
            />

            <label htmlFor="address">Address: </label>
            <input 
                value={businessInputs.address}
                name='address'
                id="address"
                onChange ={handleChange}
            />

            <label htmlFor="businessName">Business Name: </label>
            <input 
                value={businessInputs.businessName}
                name='businessName'
                id="businessName"
                onChange ={handleChange}
            />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input 
                value={businessInputs.phoneNumber}
                name='phoneNumber'
                id="phoneNumber"
                onChange ={handleChange}
            />

            <label htmlFor="businessFacebookUrl">Black Pine Facebook: </label>
            <input 
                value={businessInputs.businessFacebookUrl}
                name='businessFacebookUrl'
                id='businessFacebookUrl'
                onChange ={handleChange}
            />

            <label htmlFor="personalFacebookUrl">Personal Facebook: </label>
            <input 
                value={businessInputs.personalFacebookUrl}
                name='personalFacebookUrl'
                id="personalFacebookUrl"
                onChange ={handleChange}
            />

            <label htmlFor="instagramUrl">Black Pine Instagram: </label>
            <input 
                value={businessInputs.instagramUrl}
                name='instagramUrl'
                id="instagramUrl"
                onChange ={handleChange}
            />

            <label htmlFor="subHeader">Sub Header: </label>
            <input 
                value={businessInputs.subHeader}
                name='subHeader'
                id="subHeader"
                onChange ={handleChange}
            />

            <button>Save</button>

        </form>
    )
}

export {ServiceEditFields, BusinessEditFields, MassageEditFields}