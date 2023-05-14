import { Navigate, Route, Routes } from "react-router-dom"
import { Carrito, Inicio, Contacto, Horarios, Productos, Tricking, FunCore, Pilates, Taekwondo } from "../../hebe/pages/index.js"
import { GetUser, CreateUser, UpdateUser, DeleteUser, CreateActivity, GetActivity, UpdateActivity, DeleteActivity, GetSchedule, CreateSchedule, UpdateSchedule, DeleteSchedule, CreateUserinSchedule, DeleteUsertoSchedule, DeleteUsertoDiary, SearchUser, SearchActivity, SearchSchedule } from "../../auth/pages/AdminPages"
import { Nav } from "../../ui"
import { Login } from "../pages/Login"
import { Atribuciones } from "../pages/Atribuciones.jsx"
import { AdminLogin } from "../../auth/index.js"





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
        <Route path="login" element={<Login />}></Route>
        {/* Estas rutas deberan ser privadas        */}        
        <Route path="adminlogin" element={<AdminLogin />}></Route>
        {/* Rutas user */}
        <Route path="getUser" element={<GetUser />}></Route>
        <Route path="createUser" element={<CreateUser />}></Route>
        <Route path="updateUser" element={<UpdateUser />}></Route>
        <Route path="deleteUser" element={<DeleteUser />}></Route>
        {/* Rutas Activity */}
        <Route path="getActivity" element={<GetActivity />}></Route>
        <Route path="createActivity" element={<CreateActivity />}></Route>
        <Route path="updateActivity" element={<UpdateActivity />}></Route>
        <Route path="deleteActivity" element={<DeleteActivity />}></Route>
        {/* Rutas Schedule*/}
        <Route path="getSchedule" element={<GetSchedule />}></Route>
        <Route path="createSchedule" element={<CreateSchedule />}></Route>
        <Route path="updateSchedule" element={<UpdateSchedule />}></Route>
        <Route path="deleteSchedule" element={<DeleteSchedule />}></Route>
        {/* Rutas Diary */}
        <Route path="createUserinSchedule" element={<CreateUserinSchedule />}></Route>
        <Route path="deleteUsertoSchedule" element={<DeleteUsertoSchedule />}></Route>
        <Route path="deleteUsertoDiary" element={<DeleteUsertoDiary />}></Route>
        {/* Rutas Searches */}
        <Route path="searchUser" element={<SearchUser/>}></Route>
        <Route path="searchActivity" element={<SearchActivity/>}></Route>
        <Route path="searchSchedule" element={<SearchSchedule />}></Route>

        <Route path="atribuciones" element={<Atribuciones />}></Route>

      </Routes>
    </>
  )
}
