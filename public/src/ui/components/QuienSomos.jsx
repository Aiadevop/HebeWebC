import "../css/quiensomos.css";

export const QuienSomos = () => {
    return (
        <section id="quiensomos">
            <div className="quiencontainer">
                <div className="h2div">
                    <h2 className="h2quien">¿Quién somos?</h2>
                </div>
                <div className="pdiv">

                    <p className="pquien">Somos un club de taekwondo que llevamos 15 años en Moaña. Entrenamos a niños y mayores para mejorar su calidad de vida.</p>

                    <p className="pquien">Hacemos otras actividades como pilates (ayuda mejorar la elasticidad de nuestro cuerpo),
                        fun core (ven a divertirte poniéndote en forma) y tricking ( te entrenamos para que sepas hacer todas esas piruetas que siempre has querido).
                    </p>
                </div>
                <br></br>
                <div className="buttondiv">

                {/* OJO CAMBIAR MAIL */}
                <a href="mailto:almudena85perez@gmail.com">
                    <button className="butempiezahoy">EMPIEZA HOY</button>
                </a>
                </div>

            </div>
        </section>
    )
}
