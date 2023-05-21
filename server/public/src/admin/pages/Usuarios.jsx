import React, { useEffect, useState } from 'react';


export const Usuarios = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8090/api/usuarios?limite=100")
      .then(response => response.json())
      // .then((data) => { setData(data.total), console.log(data) });
      // .then((data) => { setData(data.usuarios[0].nombre), console.log(data) });
      .then((data) => { setData(JSON.stringify({ data})) });
  }, [])

  return (
    <>
      <br />
      <div>Usuarios</div>
      <div className="App">
        <header className="App-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </>
  )
}
