import { NavLink } from 'react-router-dom';
import '../../ui/css/admin.css'


export const AdminLogin = () => {


  return (
    <>
      <div className=''>

        <ul className="">

           <li className='adminLi'>
            <NavLink className="boton" to="/GetUser">
              <button className='botonAdmin'>Mostrar usuarios</button>
            </NavLink>
          </li>
           <li className='adminLi'>
            <NavLink className="boton" to="/PostUser">
              <button className='botonAdmin'>Crear Usuario</button>
            </NavLink>
          </li>
           <li className='adminLi'>
            <NavLink className="boton" to="/UpdateUser">
              <button className='botonAdmin'>Actualizar Usuario</button>
            </NavLink>
          </li>
           <li className=''>
            <NavLink className="boton" to="/DeleteUser">
              <button className='botonAdmin'>Borrar Usuario</button>
            </NavLink>
          </li>
           <li className='adminLi'>
            <NavLink className="boton" to="/CreateActivity">
              <button className='botonAdmin'>Crear Actividad</button>
            </NavLink>
          </li>
           <li className='adminLi'>
            <NavLink className="boton" to="/CreateHour">
              <button className='botonAdmin'>Crear Horario</button>
            </NavLink>
          </li>
        </ul>

      </div>

    </>
  )
}
