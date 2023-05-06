import { ActInicio, Cartel, Footer, Horarios, QuienSomos, Slide } from "../../ui/components"
import "../../ui/css/cartel.css";



export const Inicio = () => {

  return (
    <>
      <Slide/>
      <Cartel/>
      <br/>
      <ActInicio />
      <QuienSomos />
      <Horarios/>    
      <Footer/>
    </>
  )
}
