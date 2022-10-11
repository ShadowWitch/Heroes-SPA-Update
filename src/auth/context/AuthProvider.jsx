import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

const init = () =>{
    const username = JSON.parse(localStorage.getItem('username'))
    // !!username Significa si user existe, entonces estara en "true"(Si por ejemplo viene "username: juan" entonces al poner "!!username" se convierte a "true" y si por alguna razon viene en "undefined" se convierte a false)
    return {
        logged: !!username,
        username
    }
}

export const AuthProvider = ({children}) => {

    // Aqui le pusimos 'state' y 'dispatch' pero le podemos poner CUALQUIER NOMBRE
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (username = '') => {
        const action = {
            type: types.login,
            payload: username
        }

        // almacenar en el LocalStorage
        localStorage.setItem('username', JSON.stringify(action.payload))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('username')
        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            authState,
            // methods
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
