import React from 'react'
import "../css/horarioinicio.css";

export const Horarios = () => {
    return (
        <>
            <div className='horariosInicio'>
                <br />

                <h2 className='horarioH2'>Horarios</h2>
                <a href="src\ui\descargas\horariosHebe.pdf" download className='horarioH5'>Descargar horarios</a>
                <div className='horariocontainer'>
                    <div>
                        <br />
                        <img className='taehorario' src='../../src/ui/img/horarios/horarioHebe.png'></img>
                    </div>
                    <div>
                        <br />
                        <img className='taehorario' src='../../src/ui/img/horarios/horarioQuintela.png'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
