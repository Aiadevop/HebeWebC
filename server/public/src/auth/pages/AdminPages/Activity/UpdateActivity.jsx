import { useState } from 'react'

export const UpdateActivity = () => {
 
  const [idInput, setIdInput] = useState('');
  const [actividadPutInput, setActividadPutInput] = useState('');
  const [precioPutInput, setPrecioPutInput] = useState('');

  const url = 'http://localhost:8080/'

  //Función actualizar usuario
  async function onSubmitUpdateActivity(event) {

    event.preventDefault();
    try {

      let _datos = {
        rol: "USER_ROLE"
      }

      if (actividadPutInput !== "" || undefined) {
        _datos.actividad = actividadPutInput;
      }
      
      if (precioPutInput !== "" || undefined) {
        _datos.precio = precioPutInput;
      }

      const response = await fetch(`${url}api/actividades/${idInput}`, {
        method: "PUT",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });
      console.log(_datos)

      const dataActivityPut = await response.json();
      console.log(dataActivityPut)
      if (response.status !== 200) {
        throw dataActivityPut.error || new Error(`Request failed with status ${response.status}`);
      }
      alert(`Actividad ${actividadPutInput} actualizada`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitUpdateActivity} >
        <h1>Actualizar Actividad</h1>
        <br/>
        <label>Id actividad </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <label>Nombre Actividad </label>
        <input
          type="text"
          name="actividad"
          placeholder="Nombre actividad"
          value={actividadPutInput}
          onChange={(e) => setActividadPutInput(e.target.value)}
        />
        <br />
        <label>Precio Actividad </label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={precioPutInput}
          onChange={(e) => setPrecioPutInput(e.target.value)}
        />
        <input className='botonForm' type="submit" value="Actualizar actividad" />
      </form>


    </>
  )
}
