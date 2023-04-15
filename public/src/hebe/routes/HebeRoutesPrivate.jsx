import { Navigate, Route, Routes } from "react-router-dom"
import { Nav } from "../../ui/index.js"
import { Admin, Usuarios } from "../../auth/index.js"



export const HebeRoutesPrivate = () => {
  return (
    <>

        <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />}></Route>     
            <Route path="usuarios" element={<Usuarios/>}></Route>          
            <Route path="admin" element={<Admin/>}></Route>          

          </Routes>
    </>
  )
}
