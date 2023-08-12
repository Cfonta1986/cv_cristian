/*import { Styled } from "styled-components/dist/constructors/constructWithOptions";*/
import Foto_cv from "../../assets/images/foto_cv_redonda.png"





const Sobre_mi = () => {
    return (
        <div>
            <div>
                <img src={Foto_cv} alt="Foto de Cristian Fontanini"/>
            </div>
            <div>
                <h3>Hola, mi nombre es Cristian Fontanini, construyo páginas web y soy bombero.</h3>
                <h4>Me formé en Marketing Digital en Google Activate, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END en Alura y Argentina Programa 4.0. También soy bombero de experiencia con conocimiento en manejo de camiones, bombas e incendio en general, rescatista en situaciones de magnitud (ej. edificio que se derrumbó en calle Salta 2141, incluso poseo Diploma de Honor de la República Argentina).</h4>
            </div>
        </div>
    )
}

export default Sobre_mi