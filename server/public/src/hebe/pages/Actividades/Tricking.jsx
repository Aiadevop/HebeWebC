import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Tricking = () => {
  
  return (
    <>
      <br />
      <h1>Tricking Hebe Moaña</h1>
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <p>
          ¿Quieres probar algo nuevo y emocionante? ¡Prueba nuestro entrenamiento de Tricking en Hebe! El Tricking es un deporte que combina artes marciales, acrobacias y gimnasia en una secuencia fluida de movimientos impresionantes. Nuestros instructores expertos te guiarán a través de técnicas de volteretas, saltos y patadas, mientras mejoras tu coordinación, fuerza y flexibilidad. En nuestra escuela de Tricking en Moaña, te desafiamos a alcanzar nuevos niveles de habilidad y a descubrir tu verdadero potencial atlético. Además, nuestro ambiente de apoyo y amistoso te permitirá conectarte con otros apasionados del Tricking y disfrutar de la comunidad. Únete a nosotros ahora y experimenta la emoción del Tricking en Hebe.
          
          </p>
        </div>
        <img className='taekwondoImg' src='../../src/ui/img/triking.png'></img>
      </div>

      <div className='taekwondoContainerMovil'>
        <img className='taekwondoImgx' src='../../src/ui/img/triking.png'></img>
        <div className='taekwondo'>
          <p>
          ¿Quieres probar algo nuevo y emocionante? ¡Prueba nuestro entrenamiento de Tricking en Hebe! El Tricking es un deporte que combina artes marciales, acrobacias y gimnasia en una secuencia fluida de movimientos impresionantes. Nuestros instructores expertos te guiarán a través de técnicas de volteretas, saltos y patadas, mientras mejoras tu coordinación, fuerza y flexibilidad. En nuestra escuela de Tricking en Moaña, te desafiamos a alcanzar nuevos niveles de habilidad y a descubrir tu verdadero potencial atlético. Además, nuestro ambiente de apoyo y amistoso te permitirá conectarte con otros apasionados del Tricking y disfrutar de la comunidad. Únete a nosotros ahora y experimenta la emoción del Tricking en Hebe.
          
          </p>
        </div>
      </div>
      <div >        
          <br/>
          <h3 className='divHorario'>Horarios</h3>
          <br/>
          <h3 className='divHorarioh3'>Tenemos clases de tricking de <strong>lunes a viernes</strong> de <strong>17:30-19:30 </strong></h3>   
          <br/>
      </div>
      <Footer/>


    </>
  )
}
