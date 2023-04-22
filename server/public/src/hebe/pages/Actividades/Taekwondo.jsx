import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Taekwondo = () => {
  return (
    <>
      <br />
      <h1>Taekwondo Hebe Moaña</h1>
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <p>
            ¡Descubre los beneficios del taekwondo en Hebe! En nuestro club de taekwondo en Moaña, aprenderás técnicas de defensa personal, mejorarás tu forma física y desarrollarás habilidades sociales. Nuestros instructores altamente cualificados se enfocan en desarrollar tu confianza y autocontrol, mientras mejoran tu coordinación, equilibrio y flexibilidad. A través de nuestras clases divertidas y desafiantes, tanto niños como adultos pueden disfrutar de los beneficios del taekwondo en un ambiente acogedor y motivador. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          </p>
        </div>
        <img className='taekwondoImg' src='../../src/ui/img/taekwondo.png'></img>
      </div>

      <div className='taekwondoContainerMovil'>
        <img className='taekwondoImgx' src='../../src/ui/img/taekwondo.png'></img>
        <div className='taekwondo'>
          <p>
            ¡Descubre los beneficios del taekwondo en Hebe! En nuestro club de taekwondo en Moaña, aprenderás técnicas de defensa personal, mejorarás tu forma física y desarrollarás habilidades sociales. Nuestros instructores altamente cualificados se enfocan en desarrollar tu confianza y autocontrol, mientras mejoran tu coordinación, equilibrio y flexibilidad. A través de nuestras clases divertidas y desafiantes, tanto niños como adultos pueden disfrutar de los beneficios del taekwondo en un ambiente acogedor y motivador. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          </p>
        </div>
      </div>
      <div className='horariocontainer'>
        <div>
          <br/>
          <h2>Horarios</h2>
          <h3>Club Hebe</h3>
          <br/>
          <img className='taehorario' src='../../src/ui/img/taekwondohorario1.png'></img>
        </div>
        <div>
          <br/>
          <h3 className='quintela'>Pabellón Quintela</h3>
          <br/>
          <img className='taehorario' src='../../src/ui/img/taekwondohorario.png'></img>
        </div>
      </div>
      <Footer/>
    </>
  )
}
