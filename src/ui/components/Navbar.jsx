import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const {authState, logout} = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogout = () => {
        // console.log('logout')
        // replace: true // Evita que la persona pueda regresar al historial anterior... (porque en teoria se esta reemplazando)
        
        logout()
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span
                        className='nav-item nav-link text-warning'
                    >{authState?.username}</span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >Logout</button>

                </ul>
            </div>
        </nav>
    )
}