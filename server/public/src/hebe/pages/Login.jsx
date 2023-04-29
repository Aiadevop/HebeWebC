import axios from 'axios';
import { useEffect, useState } from 'react';




export const Login = () => {

    const [users, setUsers] = useState([])
    console.log(users)

    const getUsers = async () => {

        const { data } = await (axios.get('http://localhost:8080/api/usuarios?limite=100'))
        const usuarios = data.usuarios
        setUsers(usuarios)
        return usuarios;
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            <br />
            <h1>Admin</h1>
            <div className='users'>
                <ol>
                    {
                        users.map(({ id, nombre, correo }) => (
                            <>
                                <li key={id}>{nombre} </li>
                                <li>{correo}</li>
                            </>
                        ))}
                </ol>
            </div>
        </>
    )
}