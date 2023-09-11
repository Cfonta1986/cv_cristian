import styled  from "styled-components"
import Foto_cv from "../../assets/images/foto_cv_redonda.png"
import FotoGitHub from "../../assets/images/github.png"
import FotoLinkedIn from "../../assets/images/linkedin.png"
import FotoLogoCF from "../../assets/images/LOGO_CF_limpio_ch.png"
import Curriculum from "../../assets/docs/cristian_fontanini.pdf"
import {CajaPrincipal} from "../SobreMi"


const CajaHola = styled(CajaPrincipal)`
    height: 90vh;
`


const CajaFotoH3 = styled.div`
    display: flex;
`

const TituloPrincipal = styled.h1`
    text-align: center;
    font-size: 60px;
`

export const ParrafoPrincipal = styled.p`
    font-size: 30px;
    margin-top: 4rem;
    text-align: center;
`

const CajaTitulo = styled.div`
    margin-top: 3rem;
`

const CajaLinks = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 500px) {
        align-items: center;
  }
`

const LinkIndividual = styled.a`
    margin-left: 0.8rem;
    margin-top: 2rem;
`

const DivImg= styled.div`
    @media (max-width: 803px) {
        display: none;
  }
`


const ArchivoDescarga = () => {
    return (
      <LinkIndividual href= {Curriculum} download>
        <img src={FotoLogoCF} alt="Curriculum CF" />
      </LinkIndividual>
    );
  };

  

export const Links = () => {
    return (
        <CajaLinks>
            <LinkIndividual href="https://www.linkedin.com/in/cristian-fontanini/" target="_blank" rel="noopener noreferrer">
                <img src={FotoLinkedIn} alt="Foto LikedIn"/>
            </LinkIndividual>
            <LinkIndividual href="https://github.com/Cfonta1986" target="_blank" rel="noopener noreferrer">
                <img src={FotoGitHub} alt="Foto GitHub"/>
            </LinkIndividual>
            <ArchivoDescarga />
        </CajaLinks>
    );
};

const Hola = () => {
    return (
        <CajaHola>
            <CajaFotoH3>
                <DivImg>
                    <img src={Foto_cv} alt="Foto de Cristian Fontanini"/>
                </DivImg>
                <CajaTitulo>
                    <TituloPrincipal>Hola!!! <br /> Mi nombre es Cristián Fontanini.</TituloPrincipal>
                    <ParrafoPrincipal>Construyo PAGINAS WEB, me encanta la DATA SCIENCE y soy bombero. Me formé en Marketing Digital en Google Activate, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END y Python para Data Science en Alura / Oracle y Argentina Programa 4.0. </ParrafoPrincipal>
                    <Links />
                </CajaTitulo>               
            </CajaFotoH3>
        </CajaHola>
    )
}

export default Hola;