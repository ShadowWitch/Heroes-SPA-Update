import { useContext } from "react"
import { Navigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({children}) => {
    const {authState} = useContext(AuthContext)
    // console.log(authState);

    // DE ESTA MANERA NO FUNCIONA, LO HICE A MI MANERA ASI Y NOO ME FUNCIONO
    // const navigate = useNavigate()
    // if(!authState.logged){
    //     navigate('/login')
    // }

    console.log('ACA >> ', authState.logged)
    return (authState.logged)
    ? children
    : <Navigate to='/login' />
}
