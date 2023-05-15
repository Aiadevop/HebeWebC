import { useState } from 'react';

export const CreateUserinSchedule = () => {
  const [idInput, setIdInput] = useState('');
  const [usuarioPutInput, setUsuarioPutInput] = useState('');


  const url = 'http://localhost:8080/'

  //Función actualizar usuario
  async function onSubmitUpdateUseronSchedule(event) {

    event.preventDefault();
    try {

      let _datos = {
        rol: "USER_ROLE"
      }

      if (usuarioPutInput !== "" || undefined) {
        _datos.usuario = usuarioPutInput;
      }

      const response = await fetch(`${url}api/agendas/agenda/${idInput}`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });


      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      alert(`Usuario ${usuarioPutInput} añadido`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitUpdateUseronSchedule} >
        <h1>Añadir usuario</h1>
        <br/>
        <label>Id horario </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <label>Id usuario </label>
        <input
          type="text"
          name="usuario"
          placeholder="Id usuario"
          value={usuarioPutInput}
          onChange={(e) => setUsuarioPutInput(e.target.value)}
        />      
        <input className='botonForm' type="submit" value="Añadir usuario" />
      </form>


    </>
  )
}
