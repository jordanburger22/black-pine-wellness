function AuthForm(props){

    const {inputs: {username, password}, handleChange, handleSubmit, errMsg} = props

    return(
        <form className="auth-form-container" onSubmit={handleSubmit}>
            <input 
                placeholder= "Username"
                value= {username}
                name= "username"
                type= "text"
                onChange={handleChange}
                
            />

            <input 
                placeholder= "Password"
                value = {password}
                name= "password"
                type= "password"
                onChange={handleChange}
                
            />

            <button>Log In</button>
            <p>{ errMsg }</p>
        </form>
    )
}

export default AuthForm