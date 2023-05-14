import { useState } from 'react';

export const UpdateUser = () => {

  const [nameInput, setNameInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const [namePutInput, setNamePutInput] = useState('');
  const [dniPutInput, setDniPutInput] = useState('');
  const [telefonoPutInput, setTelefonoPutInput] = useState();
  const [correoPutInput, setCorreoPutInput] = useState('');
  const [passwordPutInput, setPasswordPutInput] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const url = 'http://localhost:8080/'

  //Función actualizar usuario
  async function onSubmitUpdateUser(event) {

    event.preventDefault();
    try {

      let _datos = {
        rol: "USER_ROLE"
      }

      if (namePutInput !== "" || undefined) {
        _datos.nombre = namePutInput;
      }
      
      if (dniPutInput !== "" || undefined) {
        _datos.dni = dniPutInput;
      }

      if (telefonoPutInput !== undefined) {
        _datos.telefono = telefonoPutInput;
      }

      if (correoPutInput !== "" || undefined) {
        _datos.correo = correoPutInput;
      }

      if (passwordPutInput !== "" || undefined) {
        _datos.password = passwordPutInput;
      }

      const response = await fetch(`${url}api/usuarios/${idInput}`, {
        method: "PUT",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const dataUserPut = await response.json();
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



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitUpdateUser} >
        <h1>Actualizar Registro</h1>
        <br/>
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
        <input className='botonForm' type="submit" value="Actualizar usuario" />


      </form>


    </>
  )
}
