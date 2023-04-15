import React from 'react'
import { Nav } from '../../ui'

export const UsuarioRoutes = () => {
    return (
        <>
            <Nav />
            <Route path="login" element={<Login/>}></Route>
            <div>UsuarioRoutes</div>

        </>
    )
}
