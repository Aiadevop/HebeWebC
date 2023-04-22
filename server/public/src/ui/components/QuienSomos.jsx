import "../css/quiensomos.css";

export const QuienSomos = () => {
    return (
        <section id="quiensomos">
            <div className="quiencontainer">
                <div className="pdiv">

                    <p className="pquien">
                        Bienvenidos a Hebe, la escuela de taekwondo en Moaña que ofrece clases divertidas y desafiantes para niños y adultos. Además del taekwondo, también ofrecemos Pilates, Fun-Core y Tricking para aquellos que buscan variedad en su entrenamiento.
                    </p>
                    <p className="pquien">
                        Nuestros instructores altamente cualificados se centran en desarrollar habilidades físicas y sociales fomentando el autocontrol. En Hebe, nuestros estudiantes aprenden los fundamentos del taekwondo mientras mejoran su coordinación, equilibrio y flexibilidad.
                    </p>
                    <p className="pquien">
                        Ofrecemos entrenamiento para adultos con un enfoque en mejorar la salud y la fuerza en Moaña. Y si buscas algo diferente, también puedes probar nuestras clases de Pilates para mejorar tu fuerza y flexibilidad, o nuestros entrenamientos de Fun-Core para un desafío extra.
                    </p>
                    <p className="pquien">
                        Si quieres probar algo realmente emocionante, ¡prueba nuestro Tricking! Esta actividad combina elementos del taekwondo con acrobacias y movimientos acrobáticos. ¡Es perfecto para aquellos que buscan desafiar sus límites y aprender nuevos trucos!
                    </p>
                    <p className="pquien">
                        En nuestra escuela de taekwondo en Pontevedra, encontrarás un ambiente acogedor y motivador. No importa si eres principiante o experto en artes marciales, ¡te ayudaremos a alcanzar tus objetivos! ¡Únete a la comunidad de Hebe y descubre todo lo que podemos ofrecerte!
                    </p>
                </div>
                <div className="pdivmovil">

                    <p className="pquien">
                        Bienvenidos a Hebe, la escuela de taekwondo en Moaña que ofrece clases divertidas y desafiantes para niños y adultos. Además del taekwondo, también ofrecemos Pilates, Fun-Core y Tricking para aquellos que buscan variedad en su entrenamiento.
                    </p>
                    <br/>            
                    <p className="pquien">
                        En Hebe, nuestros estudiantes aprenden los fundamentos del taekwondo mientras mejoran su coordinación, equilibrio y flexibilidad.
                    </p>
                    <br/>
                    <p className="pquien">
                         Y si buscas algo diferente, también puedes probar nuestras clases de Pilates para mejorar tu fuerza y flexibilidad, o nuestros entrenamientos de Fun-Core para un desafío extra.
                    </p>
                    <br/>
                    <p className="pquien">
                        Si quieres probar algo realmente emocionante, ¡prueba nuestro Tricking! Esta actividad combina elementos del taekwondo con acrobacias. ¡Es perfecto para aquellos que buscan desafiar sus límites y aprender nuevos trucos!
                    </p>
                    <br/>
                    <p className="pquien">
                        No importa si eres principiante o experto, ¡te ayudaremos a alcanzar tus objetivos! ¡Únete a la comunidad de Hebe y descubre todo lo que podemos ofrecerte!
                    </p>
                </div>
                <br></br>
                <div className="buttondiv">

                    {/* OJO CAMBIAR MAIL */}
                    <a href="mailto:almudena85perez@gmail.com">
                        <button className="butempiezahoy">¡Prueba gratis!</button>
                    </a>
                </div>

            </div>
        </section>
    )
}
