import React from 'react'
import { Nav } from '../../ui'
import { Login } from '../../auth/pages/Login'

export const UsuarioRoutes = () => {
    return (
        <>
            <Nav />
            <Route path="login" element={<Login/>}></Route>
            <div>UsuarioRoutes</div>

        </>
    )
}
