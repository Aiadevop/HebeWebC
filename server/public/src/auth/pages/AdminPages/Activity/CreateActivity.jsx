import { useState } from 'react';

export const CreateActivity = () => {

  const [actividadInput, setActividadInput] = useState();
  const [precioInput, setPrecioInput] = useState();
  const url = 'http://localhost:8080/'

  //Función crearUsuario
  async function onSubmitCreateActivity(event) {

    event.preventDefault();
    try {
      let _datos = {   
        actividad:actividadInput,
        precio:precioInput 
      }

      const response = await fetch(`${url}api/actividades`, {
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
      alert(`Actividad ${actividadInput} creada`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }



  return (
    <>
      <br />
      <form  className='formAdmin' onSubmit={onSubmitCreateActivity} >
      <h1>Nueva Actividad</h1>
      <br/>
          
        <label>Nombre Actividad </label>
        <input
          type="text"
          name="actividad"
          placeholder="Taekwondo, Tricking, FunCore, Pilates"
          value={actividadInput}
          onChange={(e) => setActividadInput(e.target.value)}
        />
        <br />       
        <label>Precio </label>
        <input
          type="text"
          name="precio"
          placeholder="0.00"
          value={precioInput}
          onChange={(e) => setPrecioInput(e.target.value)}
        />
 
        <input className='botonForm' type="submit" value="Crear actividad" />


      </form>
      <br />
    </>
  )
}
