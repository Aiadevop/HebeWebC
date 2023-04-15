import { Navigate, Route, Routes } from "react-router-dom"


import { Carrito, Inicio, Contacto, Horarios, Productos, Tricking, FunCore, Pilates, Taekwondo } from "../../hebe/pages/index.js"
import { Nav } from "../../ui"
import { Login } from "../pages/Login"




export const HebeRoutes = () => {
  return (
    <>

        <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />}></Route>

            <Route path="inicio" element={<Inicio />}></Route>
            <Route path="carrito" element={<Carrito />}></Route>
            <Route path="contacto" element={<Contacto />}></Route>
            <Route path="horarios" element={<Horarios />}></Route>
            <Route path="productos" element={<Productos />}></Route>
            <Route path="tricking" element={<Tricking />}></Route>
            <Route path="funcore" element={<FunCore />}></Route>
            <Route path="pilates" element={<Pilates />}></Route>
            <Route path="taekwondo" element={<Taekwondo />}></Route>          
            <Route path="login" element={<Login/>}></Route>          

          </Routes>
    </>
  )
}
