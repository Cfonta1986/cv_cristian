import styled  from "styled-components"
import Foto_cv from "../../assets/images/foto_cv_redonda.png"
import { Link } from "react-router-dom"


const CajaFotoH3 = styled.div`
    display: flex;
`



const Sobre_mi = () => {
    return (
        <div>
            <CajaFotoH3>
                <div>
                    <img src={Foto_cv} alt="Foto de Cristian Fontanini"/>
                </div>
                <div>
                    <h3>Hola, mi nombre es Cristian Fontanini, construyo páginas web y soy bombero.</h3>
                    <h4>Me formé en Marketing Digital en Google Activate, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END en Alura y Argentina Programa 4.0. También soy bombero de experiencia con conocimiento en manejo de camiones, bombas e incendio en general, rescatista en situaciones de magnitud (ej. edificio que se derrumbó en calle Salta 2141, incluso poseo Diploma de Honor de la República Argentina).</h4>
                </div>
                <div>
                    <Link to="https://www.linkedin.com/in/cristian-fontanini/">LinkedIn</Link>
                    <Link to="https://github.com/Cfonta1986">GitHub</Link>
                    <Link to="#">Curriculum</Link>
                </div>
            </CajaFotoH3>
            <div>
                <h2>Sobre mi</h2>
                <h4>Tengo 36 años, vivo en la ciudad de Rosario, Argentina.

                    Soy una persona emprendedora, con mucha visión de negocio, que le encantan los retos, detallista y autodidacta, en lo posible trato de nunca dejar de aprender.

                    Mi objetivo principal es desarrollarme profesionalmente en el sector del Desarrollo Web, es por eso que busco oportunidades que me permitan hacerlo y espero poder alinearme con los objetivos de la empresa que me contrate.</h4>
            </div>
        </div>
    )
}

export default Sobre_mi