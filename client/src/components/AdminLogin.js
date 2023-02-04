import { useContext, useState } from "react"
import { UserContext } from "./AuthContext"
import AuthForm from "./AuthForm"


const initInputs = {username: "", password: ""}

function AdminLogin(){

    const { login, resetAuthErr, errMsg} = useContext(UserContext)

    console.log(errMsg)

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        resetAuthErr()
        setInputs(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }))
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)   
    }

    return(
        <div className="admin-login-container">

            <div className="admin-login-form-div">
                <h1>Admin Login</h1>

                <AuthForm 
                   inputs = {inputs}
                   handleChange = {handleChange}
                   handleSubmit = {handleLogin} 
                   errMsg = {errMsg}
                />
                
            </div>
        </div>
    )
}

export default AdminLogin