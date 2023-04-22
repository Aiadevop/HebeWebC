import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context";
import "../../ui/css/form.css";



export const Login = () => {

    //llamamos directamente lo que queremos de otra página
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/auth/Usuarios';

        login('Lara')

        navigate(lastPath, {
            replace: true
        })
    }


    return (
        <>
            <div className="formContent">
                <div className="content">
                    <form className="contact-form" action="api/auth/login" method="get">
                        <label>USUARIO</label>
                        <input placeholder="email" type="text" />
                        <br/>
                        <label>CONTRASEÑA</label>
                        <input placeholder="password" type="current-password" />
                        <br/>
                        <input className="submitLogin" value="ENTRAR" type="submit" onClick={onLogin}/>
                        <br/>
                    </form>

                    <Link to="/" className="registro"><h4>Registrarme</h4></Link>
                </div>
            </div>
        </>
    )
}