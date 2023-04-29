import axios from 'axios';


export const Admin = () => {
    
    axios.get('http://localhost:8080/api/usuarios?limite=100')
      .then(function (response) {
        // manejar respuesta exitosa
        console.log(response);
        return response;
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre sera executado
      });

    return (
        <>
            <br />
            <h1>Admin</h1>
            <div>{response}</div>
        </>
    )
}
