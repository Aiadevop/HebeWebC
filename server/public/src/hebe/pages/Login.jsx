import { useState } from 'react';


export const Login = () => {

  //Mostrar usuarios
  const [users, setUsers] = useState([])
  const [nameInput, setNameInput] = useState('');
  const [dniInput, setDniInput] = useState('');
  const [telefonoInput, setTelefonoInput] = useState();
  const [correoInput, setCorreoInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const [namePutInput, setNamePutInput] = useState('');
  const [dniPutInput, setDniPutInput] = useState('');
  const [telefonoPutInput, setTelefonoPutInput] = useState();
  const [correoPutInput, setCorreoPutInput] = useState('');
  const [passwordPutInput, setPasswordPutInput] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const url = 'http://localhost:8080/'  

  //Función crearUsuario
  async function onSubmitCreateUser(event) {

    event.preventDefault();
    try {
      let _datos = {
        nombre: nameInput,
        dni: dniInput,
        telefono: telefonoInput,
        correo: correoInput,
        password: passwordInput,
        rol: "USER_ROLE"
      }

      const response = await fetch(`${url}api/usuarios`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const dataUser = await response.json();
      // console.log(dataUser.usuario)
      if (response.status !== 200) {
        throw dataUser.error || new Error(`Request failed with status ${response.status}`);
      }
      alert(`Usuario ${nameInput} creado`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  //Función actualizar usuario
  async function onSubmitUpdateUser(event) {

    event.preventDefault();
    try {
      let _datos = {
        nombre: namePutInput,
        dni: dniPutInput,
        telefono: telefonoPutInput,
        correo: correoPutInput,
        password: passwordPutInput,
        rol: "USER_ROLE"
      }

      const response = await fetch(`${url}api/usuarios/${idInput}`, {
        method: "PUT",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const dataUserPut = await response.json();
      // console.log(dataUserPut.usuario)
      if (response.status !== 200) {
        throw dataUserPut.error || new Error(`Request failed with status ${response.status}`);
      }
      alert(`Usuario ${nameInput} actualizado`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  //Función obtener usuarios.
  async function onSubmitGetUsers(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/usuarios?limite=100`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      // console.log(data.usuarios)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setUsers(data.usuarios);
      setMenuOpened(true)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }



  return (
    <>
      <br />
      <h1>Nuevo Registro</h1>
      <form onSubmit={onSubmitCreateUser} >
        <label>Nombre y Apellidos </label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellidos"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br />
        <label>DNI </label>
        <input
          type="text"
          name="dni"
          placeholder="Dni"
          value={dniInput}
          onChange={(e) => setDniInput(e.target.value)}
        />
        <br />
        <label>Teléfono </label>
        <input
          type="text"
          name="telefono"
          placeholder="telefono"
          value={telefonoInput}
          onChange={(e) => setTelefonoInput(e.target.value)}
        />
        <br />
        <label>Correo </label>
        <input
          type="text"
          name="correo"
          placeholder="email"
          value={correoInput}
          onChange={(e) => setCorreoInput(e.target.value)}
        />
        <br />
        <label>Contraseña </label>
        <input
          type="password"
          name="contraseña"
          placeholder="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <br />
        <input onClick={() => setMenuOpened(!menuOpened)} className={menuOpened ? 'users_visible' : 'users'} type="submit" value="Crear usuario" />


      </form>
      <br />
      <h1>Actualizar Registro</h1>
      <form onSubmit={onSubmitUpdateUser} >
        <label>Id usuario </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <label>Nombre y Apellidos </label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellidos"
          value={namePutInput}
          onChange={(e) => setNamePutInput(e.target.value)}
        />
        <br />
        <label>DNI </label>
        <input
          type="text"
          name="dni"
          placeholder="Dni"
          value={dniPutInput}
          onChange={(e) => setDniPutInput(e.target.value)}
        />
        <br />
        <label>Teléfono </label>
        <input
          type="text"
          name="telefono"
          placeholder="telefono"
          value={telefonoPutInput}
          onChange={(e) => setTelefonoPutInput(e.target.value)}
        />
        <br />
        <label>Correo </label>
        <input
          type="text"
          name="correo"
          placeholder="email"
          value={correoPutInput}
          onChange={(e) => setCorreoPutInput(e.target.value)}
        />
        <br />
        <label>Contraseña </label>
        <input
          type="password"
          name="contraseña"
          placeholder="password"
          value={passwordPutInput}
          onChange={(e) => setPasswordPutInput(e.target.value)}
        />
        <br />
        <input onClick={() => setMenuOpened(!menuOpened)} className={menuOpened ? 'users_visible' : 'users'} type="submit" value="Actualizar usuario" />


      </form>
      <br />
      <h1>Admin</h1>
      <form onSubmit={onSubmitGetUsers} >
        <input onClick={() => setMenuOpened(!menuOpened)} className={menuOpened ? 'users_visible' : 'users'} type="submit" value="Mostrar usuarios" />
        {/* <input onClick={() => setMenuOpened(!menuOpened)} className={ menuOpened ? 'users_visible' : 'users'} type="submit" value="Ocultar usuarios" />            */}

      </form>
      <div className={menuOpened ? 'users_visible' : 'users'}>
        <ol>
          {
            users.map(({ uid, nombre, correo, dni }) => (
              <>
                <li key={uid}>
                  {uid}
                  <br />
                  {dni}
                  <br />
                  {nombre}
                  <br />
                  {correo}
                </li>
                <br />
              </>

            ))}
        </ol>
      </div>

    </>
  )
}