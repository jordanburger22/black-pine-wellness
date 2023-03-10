import { createContext, useState } from "react";
import axios from 'axios'

export const UserContext = createContext()

const adminAxios = axios.create()

adminAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function AdminProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)


    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function signup(credentials){
        axios.post('/admin/signup', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState( prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }


    function login(credentials){
        axios.post('/admin/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
        }
    
    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: ""
        })
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        })
        )
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}