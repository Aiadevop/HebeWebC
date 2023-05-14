import { NavLink } from 'react-router-dom';
import '../../ui/css/admin.css'


export const AdminLogin = () => {


  return (
    <>
      <div className='adminLogin'>
        <h2>Búsquedas</h2>
        <ul className="adminLoginul">
          <li className='adminLi'>
            <NavLink className="boton" to="/SearchUser">
              <button className='botonAdmin'>Buscar usuario</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/SearchActivity">
              <button className='botonAdmin'>Buscar actividad</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/SearchSchedule">
              <button className='botonAdmin'>Buscar horario</button>
            </NavLink>
          </li>
        </ul>

        <h2>Usuarios</h2>
        <ul className="adminLoginul">

          <li className='adminLi'>
            <NavLink className="boton" to="/GetUser">
              <button className='botonAdmin'>Mostrar usuarios</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/CreateUser">
              <button className='botonAdmin'>Crear Usuario</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/UpdateUser">
              <button className='botonAdmin'>Actualizar Usuario</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/DeleteUser">
              <button className='botonAdmin'>Borrar Usuario</button>
            </NavLink>
          </li>
        </ul>

        <h2>Actividades</h2>
        <ul className="adminLoginul">

          <li className='adminLi'>
            <NavLink className="boton" to="/GetActivity">
              <button className='botonAdmin'>Mostrar Actividades</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/CreateActivity">
              <button className='botonAdmin'>Crear Actividad</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/UpdateActivity">
              <button className='botonAdmin'>Actualizar Actividad</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/DeleteActivity">
              <button className='botonAdmin'>Borrar Actividad</button>
            </NavLink>
          </li>
        </ul>

        <h2>Horarios</h2>
        <ul className="adminLoginul">
          <li className='adminLi'>
            <NavLink className="boton" to="/GetSchedule">
              <button className='botonAdmin'>Mostrar Horarios</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/CreateSchedule">
              <button className='botonAdmin'>Crear Horarios</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/UpdateSchedule">
              <button className='botonAdmin'>Actualizar Horarios</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/DeleteSchedule">
              <button className='botonAdmin'>Borrar Horarios</button>
            </NavLink>
          </li>
        </ul>

        <h2>Agenda</h2>
        <ul className="adminLoginul">
          <li className='adminLi'>
            <NavLink className="boton" to="/CreateUserinSchedule">
              <button className='botonAdmin'>Crear usuario en el horario.</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/DeleteUsertoSchedule">
              <button className='botonAdmin'>Borrar usuario del horario</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/DeleteUsertoDiary">
              <button className='botonAdmin'>Borrar usuario de la agenda</button>
            </NavLink>
          </li>
        </ul>

      </div>

    </>
  )
}
