import styled  from "styled-components"
import Foto_cv from "../../assets/images/foto_cv_redonda.png"
import FotoGitHub from "../../assets/images/github.png"
import FotoLinkedIn from "../../assets/images/linkedin.png"
import FotoLogoCF from "../../assets/images/LOGO_CF_limpio_ch.png"
import Curriculum from "../../assets/docs/cristian_fontanini.pdf"
import {CajaPrincipal} from "../SobreMi"


const CajaFotoH3 = styled.div`
    display: flex;
`

const ArchivoDescarga = () => {
    return (
      <a href= {Curriculum} download>
        <img src={FotoLogoCF} alt="Curriculum CF" />
      </a>
    );
  };

export const Links = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/cristian-fontanini/" target="_blank" rel="noopener noreferrer">
                <img src={FotoLinkedIn} alt="Foto LikedIn"/>
            </a>
            <a href="https://github.com/Cfonta1986" target="_blank" rel="noopener noreferrer">
                <img src={FotoGitHub} alt="Foto GitHub"/>
            </a>
            <ArchivoDescarga />
        </div>
    );
};

const Hola = () => {
    return (
        <CajaPrincipal>
            <CajaFotoH3>
                <div>
                    <img src={Foto_cv} alt="Foto de Cristian Fontanini"/>
                </div>
                <div>
                    <h1>Hola!!! Mi nombre es Cristián Fontanini.</h1>
                    <p>Construyo PAGINAS WEB, me encanta la DATA SCIENCE y soy bombero. Me formé en Marketing Digital en Google Activate, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END y Python para Data Science en Alura / Oracle y Argentina Programa 4.0. </p>
                    <Links />
                </div>               
            </CajaFotoH3>
        </CajaPrincipal>
    )
}

export default Hola;