import { useState } from 'react';
import '../../../../ui/css/admin.css'

export const GetSchedule = () => {
  //Mostrar horarios
  const [schedule, setSchedule] = useState([])
  const url = 'http://localhost:8080/'


  //Función obtener horarios.
  async function onSubmitGetSchedule(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/horarios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      console.log(data)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setSchedule(data.horarios);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <br />
      <form onSubmit={onSubmitGetSchedule} >
        <input className="boton" type="submit" value="Mostrar horarios" />
       
      </form>
      <div >
        <ol >
          {
            schedule.map(({ _id, dia, desde, hasta, sala, actividad, nombreActividad }) => (
              <li key={_id} className='boton'>
                id={_id}
                <br />
                {dia}
                <br />
                {sala}
                <br />
                {desde}
                <br />
                {hasta}
                <br />
                {nombreActividad} ({actividad})
                <br />
              
                <br />
              </li>
            ))

          }
        </ol>
      </div>
    </>
  )
}
