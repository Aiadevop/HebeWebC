import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Pilates = () => {
  return (
    <>
      <br />
      <h1>Pilates Hebe Moaña</h1>
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <p>
          ¡Descubre los beneficios del Pilates en Hebe! En nuestra escuela de Pilates en Moaña, mejorarás tu fuerza, equilibrio y flexibilidad, y reducirás el estrés mientras aprendes la técnica correcta. Nuestros instructores altamente cualificados se enfocan en desarrollar tu control corporal, postura y respiración, mientras te ayudan a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases personalizadas y adaptadas a todos los niveles, tanto los principiantes como los avanzados pueden disfrutar de los beneficios del Pilates en un ambiente relajado y acogedor. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          
          </p>
        </div>
        <img className='taekwondoImg' src='../../src/ui/img/pilates.jpg'></img>
      </div>

      <div className='taekwondoContainerMovil'>
        <img className='taekwondoImgx' src='../../src/ui/img/pilates.jpg'></img>
        <div className='taekwondo'>
          <p>
          ¡Descubre los beneficios del Pilates en Hebe! En nuestra escuela de Pilates en Moaña, mejorarás tu fuerza, equilibrio y flexibilidad, y reducirás el estrés mientras aprendes la técnica correcta. Nuestros instructores altamente cualificados se enfocan en desarrollar tu control corporal, postura y respiración, mientras te ayudan a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases personalizadas y adaptadas a todos los niveles, tanto los principiantes como los avanzados pueden disfrutar de los beneficios del Pilates en un ambiente relajado y acogedor. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          
          </p>
        </div>
      </div>
      <div >        
          <br/>
          <h3 className='divHorario'>Horarios</h3>
          <br/>
          <h3 className='divHorarioh3'>Tenemos clases de pilates todos los <strong>martes</strong> y <strong>jueves</strong> de <strong>9:30-10:30 </strong>y de <strong>21:30 a 22:30</strong></h3>   
          <br/>
      </div>
      <Footer/>
    </>
  )
}
