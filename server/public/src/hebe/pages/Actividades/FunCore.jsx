import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const FunCore = () => {
  return (
    <>
      <br />
      <h1>Funcore Hebe Moaña</h1>
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <p>
          ¡Descubre la mejor combinación de CrossFit y trabajo del core en Hebe con nuestro entrenamiento Funcore! En nuestra escuela de Funcore en Moaña, mejorarás tu fuerza, resistencia, equilibrio y flexibilidad, mientras trabajas en tu núcleo y quemas calorías. Nuestros instructores altamente cualificados se enfocan en desafiarte a través de rutinas que combinan levantamiento de pesas, entrenamiento cardiovascular y movimientos funcionales, mientras te ayudan a mejorar tu técnica y a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases dinámicas y personalizadas, tanto los principiantes como los atletas experimentados pueden disfrutar de los beneficios del Funcore en un ambiente motivador y divertido. ¡Únete a nosotros ahora y comienza a transformar tu cuerpo y mente!
          
          </p>
        </div>
        <img className='taekwondoImg' src='../../src/ui/img/funcore.jpg'></img>
      </div>

      <div className='taekwondoContainerMovil'>
        <img className='taekwondoImgx' src='../../src/ui/img/funcore.jpg'></img>
        <div className='taekwondo'>
          <p>
          ¡Descubre la mejor combinación de CrossFit y trabajo del core en Hebe con nuestro entrenamiento Funcore! En nuestra escuela de Funcore en Moaña, mejorarás tu fuerza, resistencia, equilibrio y flexibilidad, mientras trabajas en tu núcleo y quemas calorías. Nuestros instructores altamente cualificados se enfocan en desafiarte a través de rutinas que combinan levantamiento de pesas, entrenamiento cardiovascular y movimientos funcionales, mientras te ayudan a mejorar tu técnica y a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases dinámicas y personalizadas, tanto los principiantes como los atletas experimentados pueden disfrutar de los beneficios del Funcore en un ambiente motivador y divertido. ¡Únete a nosotros ahora y comienza a transformar tu cuerpo y mente!
          
          </p>
        </div>
      </div>
      <div >
        <br />
        <h3 className='divHorario'>Horarios</h3>
        <br />
        <h3 className='divHorarioh3'>Tenemos clases de funcore todos los <strong>lunes</strong> y <strong>miércoles</strong> de <strong>9:30-10:30 </strong>y de <strong>21:30 a 22:30</strong></h3>
        <br />
      </div>
      <Footer />
    </>
  )
}
