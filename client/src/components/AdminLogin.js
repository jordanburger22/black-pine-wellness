import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin(){

    const navigate = useNavigate()

    const [failedLogin, setFailedLogin] = useState(false)

    const [loginCredentials, setLoginCredentials] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setLoginCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }))
    }

    function handleLogin(e){
        e.preventDefault()
        const {username, password} = loginCredentials
        if( username === 'test' & password === 'test'){
            navigate('/admin')
        } else setFailedLogin(true)
    }

    return(
        <div className="admin-login-container">

            <div className="admin-login-form-div">

                <h1>Admin Login</h1>

                <form onSubmit={handleLogin} className="admin-login-form">
                    
                    <label htmlFor="username">Username: </label>
                    <input 
                        value={loginCredentials.username}
                        name="username"
                        id="username"
                        onChange={handleChange}
                        className= 'admin-login-input'
                        />
                

                
                    <label htmlFor="password">Password: </label>
                    <input 
                        value={loginCredentials.password}
                        name="password"
                        id="password"
                        onChange={handleChange}
                        type='password'
                        className= 'admin-login-input'
                        />
                    
                    <button>Login</button>
                </form>

                {failedLogin && 
                <p>Incorrect username or password</p>}
            </div>
        </div>
    )
}

export default AdminLogin