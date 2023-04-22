//Tiene un children pq es un high order component

import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const { logged } = useContext(AuthContext)

    // const location = useLocation();
    // console.log(location);

    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );

    const onLogIn = () => {
        navigate('/clientesPrivate', {
            replace: true
        })
    }

    return (logged)
        ? children
        :
        <>
            {/* <Navigate to="/login" /> */}
            <div className="container">             
                <br/>
                <div>Introduzca sus datos para ver el contenido</div>
                <br/>
                <button

                    onClick={onLogIn}
                >Login
                </button>
            </div>
        </>


}
